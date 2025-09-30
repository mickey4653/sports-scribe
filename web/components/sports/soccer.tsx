import { Card, CardBody, CardHeader } from "@heroui/react";
import { Suspense } from "react";

import { SportPageHeaderCard, SportNewsCard, SportArticleHeader,
         SportNewsSMCard, MatchResult, NextMatch, LeaguePosition,

} from "./sports-pages-components";

import { soccer_header_data, premier_league_data, section_cards_header,
         laliga_data, SportNewsCardDefaultData,
         transfer_data, nwsl_data, opinion_corner_data,
         SportNewsSMCardDefaultData, spotlight_principal_team_data,
         premier_spotlight_data, premierspotlightDefaultData,

} from "@/data/soccer-page-data"; 



interface TiktokIntegrationArgs {
  args : {
    video_url : string,

  };
  className ?: string;
}


/**Main */
export default function SoccerPage() {

    return (
      <main className="px-8 pt-4 bg-white">
      
        <SoccerHeader />
        <PremierLeague/>
        <PremierSpotlights/>
        <LaLiga/>
        <TransferNews/>
        <OpinionCorner/>
        <Nwsl/>
         
        {/**
          
          <BehindScene/>
        */}
      </main>
    )

}


/**
 * Header card of the page.
 */
function SoccerHeader() {
  return (
    <SportPageHeaderCard args={ soccer_header_data.args } />
  );
}

/** 
 * Premier League section 
*/
function PremierLeague (){

  return (
    <Card className="my-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <SportArticleHeader args={section_cards_header.premier_league.args}/>
      </CardHeader>
      <CardBody>
        <section className="h-auto grid grid-cols-3 gap-4 p-5">
          <SportNewsCard args={premier_league_data[0]?.args || SportNewsCardDefaultData.args}/>
          <SportNewsCard args={premier_league_data[1]?.args || SportNewsCardDefaultData.args}/>
          <SportNewsCard args={premier_league_data[2]?.args || SportNewsCardDefaultData.args}/>
          <SportNewsCard args={premier_league_data[3]?.args || SportNewsCardDefaultData.args}/>
          <SportNewsCard args={premier_league_data[4]?.args || SportNewsCardDefaultData.args}/>
        </section>
      </CardBody>
    </Card>
  );
}

/** La Liga section */
function LaLiga(){

 return (
    <Card className="my-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <SportArticleHeader args={section_cards_header.la_liga.args}/>
      </CardHeader>
      <CardBody>
        <section className="h-auto flex flex-nowrap justify-between  overflow-x-auto">
          <SportNewsCard args={laliga_data[0]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[60dvw] lg:h-[40dvh] mx-2" />
          <SportNewsCard args={laliga_data[1]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[50dvw] lg:h-[40dvh] mx-2"/>
          <SportNewsCard args={laliga_data[2]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[50dvw] lg:h-[40dvh] mx-2"/>
        </section>
      </CardBody>
    </Card>
  );
}

/** Transfer News section */
function TransferNews(){

 return (
    <Card className="my-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <SportArticleHeader args={section_cards_header.transfer_news.args}/>
      </CardHeader>
      <CardBody>
        <section className="h-auto grid grid-cols-2 grid-rows-3 gap-4 p-5 overflow-x-auto">
            <SportNewsCard args={transfer_data[0]?.args || SportNewsCardDefaultData.args} className="lg:h-full row-span-3 mx-2" />
            <SportNewsCard args={transfer_data[1]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[30dvw] lg:h-[40dvh] mx-2" />
            <SportNewsCard args={transfer_data[1]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[30dvw] lg:h-[40dvh] mx-2" />
            <SportNewsCard args={transfer_data[1]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[30dvw] lg:h-[40dvh] mx-2" />
        </section>
      </CardBody>
    </Card>
  );
}

/** NWSL section */
function Nwsl(){

 return (
    <Card className="my-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <SportArticleHeader args={section_cards_header.nwsl.args}/>
      </CardHeader>
      <CardBody>
        <section className="h-auto flex flex-nowrap justify-between  overflow-x-auto">
          <SportNewsCard args={nwsl_data[0]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2" />
          <SportNewsCard args={nwsl_data[1]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2"/>
          <SportNewsCard args={nwsl_data[2]?.args || SportNewsCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2"/>
        </section>
      </CardBody>
    </Card>
  );
}

/**Behind the scence */
function BehindScene (){

  //Video url
  const tiktok_args = {
    video_url : "https://www.tiktok.com/@grest_football40/video/7434997252067790112"
  } ;

  return (
    <Card className="m-6 bg-black">
      <CardHeader className="flex justify-center py-5 ">
        <h1 className="text-3xl font-bold mb-8 capitalize mt-3 text-white"> Behind The Scene </h1>
      </CardHeader>
      <CardBody className="text-white">
        <section className="h-auto flex flex-nowrap justify-between  overflow-x-auto">

          <TiktokIntegration args = {tiktok_args} className="  mx-4 " />
          <TiktokIntegration args = {tiktok_args} className="  mx-4  " />
          <TiktokIntegration args = {tiktok_args} className="  mx-4 " />
          <TiktokIntegration args = {tiktok_args} className="  mx-4 " />
          <TiktokIntegration args = {tiktok_args} className="  mx-4 " />

          
        </section>
      </CardBody>
    </Card>
  );

}

/**Opinion corner */
function OpinionCorner(){

  return (
    <Card className="my-6 bg-sport-blue">
      <CardHeader className="flex justify-center pl-5 pr-5">
        <h1 className="text-3xl text-center font-bold mb-8 capitalize mt-3 text-white"> Sports Scribe Opinion Corner </h1>
      </CardHeader>
      <CardBody>
        <section className="h-auto flex flex-nowrap justify-between  overflow-x-auto">
          <SportNewsSMCard args={opinion_corner_data[0]?.args || SportNewsSMCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2 md:h-[50dvh] lg:h-[60dvh] " />
          <SportNewsSMCard args={opinion_corner_data[1]?.args || SportNewsSMCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2 md:h-[50dvh] lg:h-[60dvh] " />
          <SportNewsSMCard args={opinion_corner_data[1]?.args || SportNewsSMCardDefaultData.args} className=" lg:min-w-[40dvw] mx-2 md:h-[50dvh] lg:h-[60dvh] " />
        </section>
      </CardBody>
    </Card>
  );

}

/** Premier spotlight section */
function PremierSpotlights(){

  return (
    <Card className="my-6">
      <CardHeader className="flex justify-between pl-5 pr-5">
        <h1 className=" self-center text-2xl font-semibold">Premier Spotlights</h1>
      </CardHeader>

      <CardBody>
        <section className="h-auto grid grid-cols-3 gap-4 p-5">

          { /** Principal Spotlight team article card */ }
          <SportNewsCard args={spotlight_principal_team_data[0]?.args || SportNewsCardDefaultData.args } className="lg:h-full"/>

          { /** Principal spotlight team info : last match , next match , league position*/ }
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
                  <tr className="flex justify-between p-3 ">
                    <td> 
                      <MatchResult args={premier_spotlight_data[0]?.last_match_result.args || premierspotlightDefaultData.last_match_result.args} />
                    </td>
                    <td> 
                      <NextMatch args = {premier_spotlight_data[0]?.next_match.args || premierspotlightDefaultData.next_match.args} />
                    </td>
                    <td>
                      <LeaguePosition args = {premier_spotlight_data[0]?.league_position.args || premierspotlightDefaultData.league_position.args}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardHeader>

            <CardBody>
              <div className="h-auto grid grid-cols-2 gap-4 p-5">
                <SportNewsSMCard args = {premier_spotlight_data[0]?.spotight_info_1.args || SportNewsSMCardDefaultData.args} />
                <SportNewsSMCard args = {premier_spotlight_data[0]?.spotight_info_2.args || SportNewsSMCardDefaultData.args} />
              </div>
            </CardBody>
          </Card>
        </section>
      </CardBody>
    </Card>
  );
}




async function TiktokIntegration( {args, className} : TiktokIntegrationArgs ){

  //tiktok video html code
  const embed_tiktok = await fetchTiktok(args.video_url);

  const code = ` <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tnghes_07/video/7543955960205741326" data-video-id="7543955960205741326" data-embed-from="embed_page" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@tnghes_07" href="https://www.tiktok.com/@tnghes_07?refer=embed">@tnghes_07</a> <p>greatest thief in history😩 <a title="football" target="_blank" href="https://www.tiktok.com/tag/football?refer=embed">#Football</a> <a title="at7" target="_blank" href="https://www.tiktok.com/tag/at7?refer=embed">#AT7</a> <a title="viralvideo" target="_blank" href="https://www.tiktok.com/tag/viralvideo?refer=embed">#viralvideo</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> </p> <a target="_blank" title="♬ FUNK DO SURPRISE - Super Slowed - KXZINVK" href="https://www.tiktok.com/music/FUNK-DO-SURPRISE-Super-Slowed-7533103392052267009?refer=embed">♬ FUNK DO SURPRISE - Super Slowed - KXZINVK</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`;

  const embed_code = {__html: code}; // {__html: embed_tiktok.html};

  return (
    <Suspense fallback = {<div>Loading...</div>}>
      <div dangerouslySetInnerHTML={embed_code} className={className}/>
    </Suspense> 
    
  );
}

async function fetchTiktok(url : String){
  
  //request url
  const tiktok_oembed_url = `https://www.tiktok.com/oembed?url=${url}`;
  const data = await fetch(tiktok_oembed_url);
  const tiktok_video = await data.json();

  return tiktok_video ;

}




