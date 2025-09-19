

export interface SportHeaderCardArgs {
  /**Provide the data for the {@link SportHeaderCard} component */
  args : {
    /** Background image
     * * Please ensure that it follow the tailwind bg url format
     * * Otherwise, it will break.
     */
    background_img : string ,

    /** The color representing the type of sport */
    sport_color : string,

    /** The name of the sport */
    sport_name : string,
    
  } ;

  /**Provide the style for the card (preferably tailwind css style) 
   * * This is optional because the component {@link SportHeaderCard}
   * contains a default tailwind style. 
   * * If you decide to provide your custom style, please note that it will
   * override the default style.
  */
  className ?: string;

}

export interface SportNewsCardProps {
  args : {
    background_img ?: string;
    sport_name : string;
    sport_theme_color ?: string,
    date : string;
    content_title : string;
    col_span : string;
  };
  className ?:string;
}



/**
 * Represents the card header of a sport page.
 * It contains:
 * * A background image,
 * * The title/type of sport,
 * * The color assigned to that sport.
 * 
 */
export function SportHeaderCard ( {args, className } : SportHeaderCardArgs){

  const default_style = " rounded-2xl flex justify-end  w-full min-h-[20dvh] bg-cover bg-no-repeat bg-center " ;

  return (
      <section className=" flex justify-center pb-3 pt-5 ">
          <div className= {` ${(className === undefined) ? default_style : className} ${(args.background_img === ' ')? 'bg-sport-dark' : args.background_img  } `} >
              <h2 className={` min-h-fit rounded-3xl ${args.sport_color} w-[5em] min-w-fit text-center text-4xl p-2 my-2 mr-20 self-center `}> {args.sport_name} </h2>
          </div>
      </section>
  );

}

/**Sports news card */
export function SportNewsCard ({args, className} : SportNewsCardProps) {

  return (

    <div className= {` sm:h-auto md:h-auto lg:h-[42.8vh] rounded-xl ${(className === undefined) ? ' ' : className} ${args.col_span} ${(args.background_img === undefined )? 'bg-sport-dark' : args.background_img  } lg:bg-top bg-cover bg-center bg-no-repeat `}>

      <div className="h-full rounded-xl grid grid-rows-3 px-5 bg-gradient-to-t from-[#0a0c0e8a] from-10% to-transparent to-90%">

        <div className="row-span-1"> </div>

        <div className="row-span-2 backdrop-blur-sm backdrop-opacity-50 flex flex-col text-white justify-end">

          <h2 className={` rounded-3xl ${args.sport_theme_color} w-[5em] min-w-fit text-center p-2 m-2 `}> {args.sport_name} </h2>

          <h3 className="m-2 md:text-medium sm:text-sm w-fit"> {args.date} </h3>

          <h3 className="m-2 md:text-medium sm:text-sm w-fit font-semibold">{args.content_title} </h3>

        </div>

      </div>

    </div>

  );
}