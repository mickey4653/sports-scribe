import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


interface SportPageProps {
  params: {
    sport: string;
  };
}

interface SportArticleHeaderProps{
  args : {
    logo : string;
    title : string;
    fullarticlelink : string;

  };
}

interface SportNewsCardProps {
  args : {
    background_img ?: string;
    sport_name : string;
    date : string;
    content_title : string;
    col_span : string;
  };

}

interface MatchResultProps {
  args : {
    team1_logo : string,
    team1_name : string,
    team1_goals : number,
    team2_logo : string,
    team2_name : string,
    team2_goals : number,
  }
}

interface NextMatchProps {
  args : {
    team1_logo : string,
    team1_name : string,
    game_date : string,
    game_hour : string,
    team2_logo : string,
    team2_name : string,
  }
}

interface LeaguePositionProps {
  args : {
    team_logo : string,
    team_name : string,
    team_rank : string,
  }
}

/** Main */
export default function SportPage({ params }: SportPageProps) {

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {params.sport} Articles
        </h1>
      </div>
      <PremierLeague/>
      <PremierSpotlights/>
    </>
  );
}


/** Premier League section */
function PremierLeague (){

  const header_args = {
    logo : '/images/Premier-League-Logo.png',
    title : 'Premier League',
    fullarticlelink : '/articles/premier-league'
  }

  const content_1_args = {
    background_img : 'bg-[url(/images/Talking-tactics.png)]',
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : 'Premier League: Plays, Scores, and Results',
    col_span :'col-span-2',
  }

  const content_2_args = {
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : 'What\'s new',
    col_span :'col-span-1',

  }

  const content_3_args = {
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : '2023 Season Recap',
    col_span :'col-span-1',
  }

  const content_4_args = {
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : '2023-24 Transfer Recap',
    col_span :'col-span-1',
  }

  const content_5_args = {
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : 'Arsenal At Manchester United',
    col_span :'col-span-1',
  }
  
  return (
    <Card className="m-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <SportArticleHeader args={header_args}/>
      </CardHeader>
      <CardBody>
        <section className="h-auto grid grid-cols-3 gap-4 p-5">
          <SportNewsCard args={content_1_args}/>
          <SportNewsCard args={content_2_args}/>
          <SportNewsCard args={content_3_args}/>
          <SportNewsCard args={content_4_args}/>
          <SportNewsCard args={content_5_args}/>
        </section>
      </CardBody>
    </Card>
  );
}

/** Premier spotlight section */
function PremierSpotlights(){

  /**Arsenal */
  const Arsenal_args = {
    background_img : 'bg-[url(/images/arsenal_highlight.jpg)]',
    sport_name : 'Soccer',
    date : 'August 06, 2025',
    content_title : `Arsenal Eyes €55M Move for Joao Neves as Midfield Reinforcement`,
    col_span :'col-span-1',
  }

  const last_match_args = {
    team1_logo : "data:image/png;base64,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",
    team1_name : "Arsenal",
    team1_goals : 0,
    team2_logo : "data:image/png;base64,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",
    team2_name : "Newcastle",
    team2_goals : 0,
  }

  const next_match_args = {
    team1_logo : "data:image/png;base64,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",
    team1_name : "Arsenal",
    game_date : "Sunday",
    game_hour : "10 AM",
    team2_logo : "data:image/png;base64,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",
    team2_name : "Tottenham",
  }

  const league_rank_args = {
    team_logo : "data:image/png;base64,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",
    team_name : "Arsenal",
    team_rank : "2nd",
  }

  const spotlight1_args = {
    spotlight_title : "Player Spotlight : Bukayo Saka ",
    spotlight_info : "4 assists in the last 5 games ", 
  }

  const spotlight2_args = {
    spotlight_title : "Did you know ? ",
    spotlight_info : "Arsenal's current unbeaten home streak (18 matches) is their longest since 2004's invicibles season", 
  }

  return (
    <Card className="m-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        {/**Titre*/}
        <h1 className=" self-center text-2xl font-semibold">Premier Spotlights</h1>
      </CardHeader>
      <CardBody>
        <section className="h-auto grid grid-cols-3 gap-4 p-5">
          <SportNewsCard args={Arsenal_args}/>
          <Card className="col-span-2">
            <CardHeader>
              <table className="w-full">
                <thead>
                  <tr className="flex justify-between p-3">
                    <th> Last Match </th>
                    <th> Next Match </th>
                    <th> League position </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex justify-between p-3">
                    <td> 
                      <MatchResult args={last_match_args} />
                    </td>
                    <td> 
                      <NextMatch args = {next_match_args} />
                    </td>
                    <td>
                      <LeaguePosition args = {league_rank_args}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardHeader>
            <CardBody>
              
              <div className="h-auto grid grid-cols-2 gap-4 p-5">
                <SpotlightSMCard args = {spotlight1_args} />
                <SpotlightSMCard args = {spotlight2_args} />
              </div>
            </CardBody>
          </Card>
        </section>
      </CardBody>
    </Card>
  );
}

interface SpotlightSMCardProps {
  args:{
    background_img ?: string,
    spotlight_title : string,
    spotlight_info : string,
  }
}

function SpotlightSMCard ( {args} : SpotlightSMCardProps ){


  return (
    <div className="col-span-1">
                  
      <div className={`h-[32dvh] rounded-2xl backdrop-blur-sm backdrop-opacity-50 flex flex-col text-white justify-end ${(args.background_img === undefined )? 'bg-sport-dark' : args.background_img  }`}>

        <h3 className="m-2 pl-3 md:text-medium sm:text-sm w-fit font-semibold"> {args.spotlight_title}</h3>
        <h3 className="m-2 pl-3 md:text-medium sm:text-sm w-fit"> {args.spotlight_info}  </h3>

      </div>   

    </div>
  );
}

function MatchResult({args} : MatchResultProps){


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


function NextMatch({args} : NextMatchProps){
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
            className="ml-2"
      /> 
    </div>
  );
}


function LeaguePosition({args} : LeaguePositionProps){
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

/**Sports Card Header */
function SportArticleHeader({args} : SportArticleHeaderProps){

  return (
    <>
      <div className="flex content-center">
        {/**Logo*/}
        <Image
          src={args.logo}
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

/**Sports articles card */
function SportNewsCard ({args} : SportNewsCardProps) {

  return (

    <div className= {` md:h-[50dvh] lg:h-[60dvh] rounded-xl ${args.col_span} ${(args.background_img === undefined )? 'bg-sport-dark' : args.background_img  }  bg-cover bg-center bg-no-repeat `}>

      <div className="md:h-[50dvh] lg:h-[60dvh]  rounded-xl grid grid-rows-3 p-5 bg-gradient-to-t from-[#0a0c0e8a] from-10% to-transparent to-90%">

        <div className="row-span-1"> </div>

        <div className="row-span-2 backdrop-blur-sm backdrop-opacity-50 flex flex-col text-white justify-end">

          <h2 className="rounded-3xl bg-sport-purple w-[5em] min-w-fit text-center p-2 m-2"> {args.sport_name} </h2>

          <h3 className="m-2 md:text-medium sm:text-sm w-fit"> {args.date} </h3>

          <h3 className="m-2 md:text-medium sm:text-sm w-fit font-semibold">{args.content_title} </h3>

        </div>

      </div>

    </div>

  );
}
