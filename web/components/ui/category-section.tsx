import style from "@/components/style.module.css"
import { div } from "framer-motion/client";

import Link from 'next/link'

/** Component for the bar of links */
export default function CategorySection({list_of_links} : BarLinks){
    const linksbar_style = ` ${style.set_of_links} ` ; 
    let count = -1;
    return (
        <div className={linksbar_style}>
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
    const singlelink_style = ` ${style.single_link} hover:bg-[#f97416f9] hover:text-[#333333]` ;
    return (
        <Link className={singlelink_style} href={link_path}> {link_label} </Link>
    )
}


/**---------------Interfaces---------------*/

/**Interface for a link */
export interface SingleLinkProps{
    /**The label of the link */
    link_label : string;

    /**The path of the link */
    link_path : string;

    key ?: number;
}

/**Interface for the set of links */
export interface BarLinks {
    list_of_links : SingleLinkProps[];
}
