import Link from 'next/link'

/**
 * Interface for a single link
 *  inside the category section 
 * */
export interface SingleLinkProps{
    /**The label of the link */
    link_label : string;

    /**The path of the link */
    link_path : string;

    key ?: number;
}

/**
 * Interface for the set of links 
 * that compound the category section
 * */
export interface BarLinks {
    list_of_links : SingleLinkProps[];
}


/** Component for the category section */
export default function CategorySection({list_of_links} : BarLinks){

    const categorysection_style = ` flex justify-around p-[1em] border-b-[5px] border-b-[#f97316] bg-[#333333] overflow-auto  ` ; 
    let count = -1;
    return (
        <div className={categorysection_style}>
            {
                list_of_links.map((el)=> (
                    <SingleLink key={count++} link_label={el.link_label} link_path={el.link_path}/>
                    )
                )
            }
        </div>
    );
}

/** Component for creating a link */
export  function SingleLink ({link_label, link_path} : SingleLinkProps ){

    const singlelink_style = ` text-center border-[#ffffff] border rounded-xl p-[0.5em]
                             w-[100px] min-w-max  hover:bg-[#f97416f9] hover:text-[#333333]` ;
    return (
        <Link className={singlelink_style} href={link_path}> {link_label} </Link>
    )
}