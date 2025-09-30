import Image from "next/image";
import Link from "next/link";


export interface SportHeaderCardArgs {

  /**Provide the data for the {@link SportHeaderCard} component */
  args : {
    /** Background image
     * * The url of the of the background image
    */
    image_url : string ,

    /** The color representing the type of sport
     * * I recommend you provide the Hex code
     */
    sport_color : 'sport-blue' | 'sport-dark' | 'sport-orange' | 'sport-green' | 'sport-yellow' | 'sport-brown' | 'sport-purple' ,

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

export interface SportArticleHeaderProps{
  args : {
    /**
     * The url for the section logo
     */
    logo_url ?: string;
    /**
     * The title of the section
     */
    title : string;
    /**
     * The link to the full article page
     */
    fullarticlelink : string;

  };
}

export interface SportNewsCardProps {
  args : {
    background_img_url ?: string;
    sport_name : string;
    sport_theme_color ?: 'sport-blue' | 'sport-dark' | 'sport-orange' | 'sport-green' | 'sport-yellow' | 'sport-brown' | 'sport-purple',
    date : string;
    content_title : string;
    col_span : string;
  };

  /**Provide the style for the card (preferably tailwind css style) 
   * * This is optional because the component {@link SportNewsCard}
   * contains a default tailwind style. 
   * * If you decide to provide your custom style, please note that it will not override
   * the default style. It will be add to the default one.
  */
  className ?:string;
}

export interface SportNewsSMCardProps {
  args:{
    background_img_url ?: string,
    spotlight_title : string,
    spotlight_info : string,
  } ;
  className ?: string ;
}

export interface MatchResultProps {
  args : {
    team1_logo : string,
    team1_name : string,
    team1_goals : number,
    team2_logo : string,
    team2_name : string,
    team2_goals : number,
}
}

export interface NextMatchProps {
  args : {
    team1_logo : string,
    team1_name : string,
    game_date : string,
    game_hour : string,
    team2_logo : string,
    team2_name : string,
  }
}

export interface LeaguePositionProps {
  args : {
    team_logo : string,
    team_name : string,
    team_rank : string,
  }
}

export interface PremierSpotlightsProps {

  /** Principal team */
  principal_team :  SportNewsCardProps ;

  last_match_result : MatchResultProps ;

  next_match : NextMatchProps ;

  league_position : LeaguePositionProps ;

  spotight_info_1 : SportNewsSMCardProps ;

  spotight_info_2 : SportNewsSMCardProps ;

 }





/**
 * Represents the card header of a sport page.
 * It contains:
 * * A background image,
 * * The title/type of sport,
 * * The color assigned to that sport.
 * 
 */
export function SportPageHeaderCard ( {args, className } : SportHeaderCardArgs){

  let sportcolor ;
  switch (args.sport_color) {
    case 'sport-blue' :
      sportcolor = "bg-sport-blue" ;
      break;
    case 'sport-dark' :
      sportcolor = "bg-sport-black" ;
      break;
    case 'sport-orange' :
      sportcolor = "bg-sport-orange" ;
      break;
    case 'sport-green' :
      sportcolor = "bg-sport-green" ;
      break;
    case 'sport-yellow' :
      sportcolor = "bg-sport-yellow" ;
      break;
    case 'sport-brown' :
      sportcolor = "bg-sport-brown" ;
      break;
    case 'sport-purple' :
      sportcolor = "bg-sport-purple" ;
      break;
    default :
      sportcolor = 'bg-sport-dark' ;
      break;
  }

  return (
    <section className="relative overflow-hidden w-full h-[13vh] min-h-[120px] rounded-2xl bg-zinc-700 ">
      {/** Image pour le background */}
      <Image 
        src={args.image_url || ' '}  
        alt="" 
        fill
        className="w-full h-full object-cover"
      />
      {/** Label pour le titre de  */}
      <h2 className={` absolute bottom-3 right-5 rounded-full ${sportcolor} w-[5em] min-w-fit text-center text-4xl px-6 py-3 m-2 `}> {args.sport_name} </h2>
    </section>
  );
}

/**Section Card Header */
export function SportArticleHeader({args} : SportArticleHeaderProps){

  if(args.logo_url === undefined){
    return (
      <>
        <div className="flex content-center">
          {/**Titre*/}
          <h1 className=" self-center text-2xl font-semibold">{args.title}</h1>
        </div>
        {/**Lien vers l'article */}
        <Link href={args.fullarticlelink}>
          All {args.title} News <span className="text-xl"> &rarr; </span>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="flex content-center">
        {/**Logo*/}
        <Image
          src={args.logo_url}
          alt={`${args.title} logo`}
          width={56}
          height={56}
          className="mr-2"
        />
        {/**Titre*/}
        <h1 className=" self-center text-2xl font-semibold">{args.title}</h1>
      </div>
      {/**Lien vers l'article */}
      <Link href={args.fullarticlelink}>
        All {args.title} News <span className="text-xl"> &rarr; </span>
      </Link>
    </>
  );
}

/**Sports news-article card */
export function SportNewsCard ({args, className} : SportNewsCardProps) {

  const background_url = ( args.background_img_url === undefined ) ? '/images/default_pic.png' : args.background_img_url ;

  let sportcolor ;
  
  switch (args.sport_theme_color) {
    case 'sport-blue' :
      sportcolor = "bg-sport-blue" ;
      break;
    case 'sport-dark' :
      sportcolor = "bg-sport-black" ;
      break;
    case 'sport-orange' :
      sportcolor = "bg-sport-orange" ;
      break;
    case 'sport-green' :
      sportcolor = "bg-sport-green" ;
      break;
    case 'sport-yellow' :
      sportcolor = "bg-sport-yellow" ;
      break;
    case 'sport-brown' :
      sportcolor = "bg-sport-brown" ;
      break;
    case 'sport-purple' :
      sportcolor = "bg-sport-purple" ;
      break;
    default :
      sportcolor = 'bg-sport-dark' ;
      break;
  }

  return (
    <div className= {`relative overflow-hidden sm:h-auto md:h-auto lg:h-[42.8vh] rounded-xl ${args.col_span} ${className} `}>
      {/** Image pour le background */}
      <Image 
        src={background_url}  
        alt="" 
        fill
        className="w-full h-full md:object-top object-cover"
      />
      
      <div className="absolute w-full h-full rounded-xl px-5 bg-[#0a0c0e8a]">
        {/** Contenu */}
        <div className="absolute rounded-3xl bottom-3 w-auto backdrop-blur-sm backdrop-opacity-50 flex flex-col text-white justify-end">
          <h2 className={` rounded-3xl ${sportcolor} w-[5em] min-w-fit text-center p-2 m-2 `}> {args.sport_name} </h2>
          <h3 className="m-2 md:text-medium sm:text-sm w-fit"> {args.date} </h3>
          <h3 className="m-2 md:text-medium sm:text-sm w-fit font-semibold">{args.content_title} </h3>
        </div>
      </div>
    </div>
  );
}

/** Sports news-article small card  */
export function SportNewsSMCard ( {args, className} : SportNewsSMCardProps ){

  const background_url = ( args.background_img_url === undefined ) ? '/images/default_pic.png' : args.background_img_url ;

  return (
    <div className={`col-span-1 h-[32dvh] ${className}`}>
      <div className={`relative overflow-hidden h-full rounded-2xl flex flex-col text-white justify-end lg:bg-top bg-cover bg-center bg-no-repeat `}>
        {/** Image pour le background */}
        <Image 
                src={background_url}  
                alt="" 
                fill
                className="w-full h-full md:object-top object-cover"
        />

        <div className="absolute w-full h-full rounded-xl ">
          {/** Contenu */}
          <div className="h-full content-end rounded-xl p-5 bg-gradient-to-t from-[#030d178a] from-30% to-transparent to-90%">
            <h3 className="m-2 pl-3 md:text-medium sm:text-sm w-fit font-semibold"> {args.spotlight_title}</h3>
            <h3 className="m-2 pl-3 md:text-medium sm:text-sm w-fit"> {args.spotlight_info}  </h3>
          </div>
        </div>

      </div>   
    </div>
  );
}

/**Sports news card */
export function SportNewsCardBackup ({args, className} : SportNewsCardProps) {

  return (
    <div className= {` sm:h-auto md:h-auto lg:h-[42.8vh] rounded-xl ${(className === undefined) ? ' ' : className} ${args.col_span} ${(args.background_img_url === undefined )? 'bg-sport-dark' : args.background_img_url  } lg:bg-top bg-cover bg-center bg-no-repeat `}>
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

export function MatchResult({args} : MatchResultProps){

  return (
    <div className="flex justify-between">
      { /** logo team domicile */ } 
      <Image
            src={args.team1_logo}
            alt={`${args.team1_name} logo`}
            width={40}
            height={40}
            className="mr-2"
      />
      {/** nombre de but */}  
      <span> {args.team1_goals}</span>
      <span> &nbsp; - &nbsp; </span>
      {/** nombre de but */} 
      <span> {args.team2_goals}</span>
      {/** logo team exterieur */}
      <Image
            src={args.team2_logo}
            alt={`${args.team2_name} logo`}
            width={40}
            height={40}
            className="ml-2"
      /> 
    </div>
  );
}

export function NextMatch({args} : NextMatchProps){
  return (
    <div className="flex justify-between">
      { /** logo team domicile */ } 
      <Image
            src={args.team1_logo}
            alt={`${args.team1_name} logo`}
            width={40}
            height={40}
            className="mr-2 max-h-[50px]"
      />
      {/** Jour */}  
      <span> {args.game_date}</span>
      <span> &nbsp; @ &nbsp;</span>
      {/** heure*/} 
      <span> {args.game_hour}</span>
      {/** logo team exterieur */}
      <Image
            src={args.team2_logo}
            alt={`${args.team2_name} logo`}
            width={40}
            height={40}
            className="ml-2 max-h-[60px] "
      /> 
    </div>
  );
}

export function LeaguePosition({args} : LeaguePositionProps){
  return (
    <div className="flex justify-around">
      { /** logo team domicile */ } 
      <Image
            src={args.team_logo}
            alt={`${args.team_name} logo`}
            width={40}
            height={40}
            className="mr-2"
      />
      {/** rank */}  
      <span className="mr-5"> {args.team_rank}</span>
    </div>
  );
}



