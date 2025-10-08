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
