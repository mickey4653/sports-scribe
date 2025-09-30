import { SportHeaderCardArgs, SportNewsCardProps, 
         SportNewsSMCardProps, PremierSpotlightsProps 
} from "@/components/sports/sports-pages-components";
import { u } from "framer-motion/client";

export const soccer_header_data : SportHeaderCardArgs = {
       args : {
            image_url : "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
            sport_color : 'sport-purple',
            sport_name : "Soccer"
       },
};

/**
 * Data for all sections cards header
 */
export const section_cards_header = {

    premier_league : {
        args : { 
            logo_url : '/images/Premier-League-Logo.png',
            title : 'Premier League',
            fullarticlelink : '/articles/premier-league'
        }
    },

    la_liga : {
        args : {
            logo_url  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAABHlJREFUeJztml2IVVUUx39rSBkyC5OCiEBfBNNeLAgTiejYg7umIpDKQfumjwchKkvCxMgKKgKfrCmZwqRvsDaVLQbLmkyFVJiipBgKIiow+tA+rN3DuTOMdu85a917TwadH9y3/157rXXXPmftvQ/U1NTU1NTU1NTU1NT8D5EqjKaQTQbmAz0G+SRgu0Q9VGCvBzgX6DW6MAnYJ1G/KRMeZzToZSWw1qjdAZxfolkCbHbM/wswDyhNQNcrIIVsLrAX278PMEWiHiywNx34DDjZ4cZiifqGRWh10sOQw25fUfANtuEL/lFr8NDlBKSQPQ6cYpQ/I1FfK7G3ApjrcGFUot7h0HcvASlkC4EVRvn+Mm0K2ZnAYw4XDgP9Dj3QpQSkkJ0AbHIM6ZeoPxTY6wGexeffOon6vkMPzgmKeBI4w6hdJVF3lmjWkz/FrQxJ1Psc+nE6TkAKWT9wpVE+IlEfLLEXgFsdLvwKXOvQH0FHCUghm0r+71s4BFxh0Hne9wDXSdQvnWPG6bQCBrF3Z/dK1E+LBClkm4CpjvmHJKo3YUfQdgJSyG4BLjfKX5CohU/0FLJrgKsdLnwNLHbom9JWAlLIZgMPGeXfAjeX2JsFPOJ04waJ+ptzzD9otwI2Aicatcsk6oESzQAw3TH/ek+3V4Q7ASlkK8l3ZhY2S9S3DPYWOlz4HLjdoS/EtRlqlP7HRvl+iTqri/bGOFWifucc0xJzBaSQHQ+8aJT/ASw32HvZOn+Du7sZPPiWwCpgjlG7RqJ+UKK5H5jtmP89ifqwQ2/CtARSyGYA+7C9o3dK1MJnRArZImCrZe4GPwNzOml4WmGtgAXYgv8LuKBIkEI2DftSGmN5FcGD/UhsmlG3ETirsb6bzXUQWA2cZLQHMCBRX3HoXVgT8KdRd33j14wvyM8BLjLaAvhRot7o0LuxLoGPOphjFOgj7x0873uwbZ46wpQAiboDeNVpew9wqUSd2Tj6eh1otjRasU6iqnNON57X4G2A5R28F7gYmCdRtwCkkK3F3j1CflRuPVbvCG8neB7Q6tjpK+AB4CmJenjCmPmNMda5fidP3ojHt3Zx7QUk6jB5AzORA8BNwAyJumFi8A224Ev0nf9W8NDmxUgK2fPkvcEaiTpQoBsEljlMD0nUC9vxqV3avRpbCkwuudHpwxf89/gORLpCVZejpwG7gNMdw5ZK1Oeq8KeIKq7GAJ7GF/zgsQgeqrkcvQxfzzAqUWd22w8rVVSA50wf8p7hmFHF9wHnOLRPSNSRFLKi88Ve4KeiDyg6oYolkKxS8h6i2Z8g5F959JJvne+SqKNdcfAoqqiA3diqQCi+93+H/B5xuCtetaCKBGzAtwyORskbLPdNbztU1QfsBs52DhsmD/ztClxqSVUfSS0hP0OcYtB+SF7qQxX5UkglFQDjX4y8WyDZA9wjUd+sygcLVXWCSNTtQLPvdXYBl5BveY9p8FBhBYyRQrYVWAR8AqyWqC9VPaeHqp4BE7kKWDB2OlRTU1NTU1NT81/hbx6WOVi9QQlkAAAAAElFTkSuQmCC',
            title : 'La Liga',
            fullarticlelink : '/articles/la-liga'
        }
    },

    transfer_news : {
        args : { 
            title : 'Transfer',
            fullarticlelink : '/articles/transfer-news'
        }
    },

    nwsl : {
        args : {
            logo_url: 'data:image/png;base64,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',
            title : 'NWSL',
            fullarticlelink : '/articles/nwsl'
         }
    }

};

export const SportNewsCardDefaultData : SportNewsCardProps = {
  args : {
    sport_name : ' ',
    sport_theme_color: "sport-blue",
    date : ' ',
    content_title : ' ',
    col_span :' ',
  }
  
};

export const SportNewsSMCardDefaultData : SportNewsSMCardProps = {

    args : {
            spotlight_title : " ",
            spotlight_info : " ",
        }
}

export const premier_league_data : SportNewsCardProps [] = [
    
    {
        args : { 
            background_img_url : '/images/Talking-tactics.png',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : 'Premier League: Plays, Scores, and Results',
            col_span :'col-span-2',
        }
    },
    
    {
        args : { 
            background_img_url : 'https://www.sling.com/whatson/sports/soccer/media_1d039349378e35b57e31b1f94f0b67479f5feae78.png',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : 'What\'s new',
            col_span :'col-span-1',
        }
    },
    
    {
        args : { 
            background_img_url : 'https://www.sling.com/whatson/sports/soccer/media_1d039349378e35b57e31b1f94f0b67479f5feae78.png',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : '2023 Season Recap',
            col_span :'col-span-1',
        }
    },
    
    {
        args : { 
            background_img_url : 'https://www.sling.com/whatson/sports/soccer/media_1d039349378e35b57e31b1f94f0b67479f5feae78.png',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : '2023-24 Transfer Recap',
            col_span :'col-span-1',
        }
    },
    
    {
        args : { 
            background_img_url : 'https://www.sling.com/whatson/sports/soccer/media_1d039349378e35b57e31b1f94f0b67479f5feae78.png',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : 'Arsenal At Manchester United',
            col_span :'col-span-1',
        }
    }
];

export const laliga_data : SportNewsCardProps [] = [ 

    {
        args : {
            background_img_url : 'https://assets-fr.imgfoot.com/media/cache/642x382/mbappevstirol.jpg',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Real Madrid vs Osasumna`,
            col_span :' ',
        }
    },

    {
        args : {
            background_img_url : 'https://assets.goal.com/images/v3/blt610d705744893d5a/League_Cover_La_Liga.jpg',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `La Liga : Transfer Recap`,
            col_span :'',
        }
    },

    {
        args :  {
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Another article card`,
            col_span :'',
        }
    },

];

export const transfer_data : SportNewsCardProps [] = [ 

    {
       args : {
            background_img_url : 'https://assets.goal.com/images/v3/blt3607bf3294e5b5ff/pl_completed_transfers.jpg' ,
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Latest on Chelsea`,
            col_span :' ',
         }
    },

    {
       args : {
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Another article card`,
            col_span :' ',
         }
    },

];

export const nwsl_data : SportNewsCardProps [] = [ 

    {
       args : {
            background_img_url : 'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls-rsl-prd/u4k7v6adzfdqwo1xpbh5.jpg' ,
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Breaking Down 2024 NWSL Revenue`,
            col_span :' ',
         }
    },

    {
       args : {
            background_img_url : 'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls-rsl-prd/u4k7v6adzfdqwo1xpbh5.jpg' ,
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Shocking Upset-Filled Weekend `,
            col_span :' ',
         }
    },

    {
       args : {
            background_img_url : 'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls-rsl-prd/u4k7v6adzfdqwo1xpbh5.jpg' ,
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Alex Morgan's Last Match `,
            col_span :' ',
         }
    },

];

export const opinion_corner_data : SportNewsSMCardProps [] = [ 

    {
        args : {
            background_img_url : 'https://assets.goal.com/images/v3/bltee3e9fe91a64c053/UCL_Man_City_vs_Arsenal.jpg',
            spotlight_title : "AI Prediction: Man City will score 3+ against Arsenal ",
            spotlight_info : "Based on recent form, possession stats, ans xG metrics,etc. ", 
        }

    },

    {
        args : {
            spotlight_title : "Hot Take : Neymar Overrated This Season ? ",
            spotlight_info : "Despite the flashy dribbles, Neymar's goal involvement has dropped 18% from last season. ",
        }

    },


];

export const spotlight_principal_team_data : SportNewsCardProps  [] = [
    {
        args : {
            background_img_url : 'https://www.arsenalstation.com/wp-content/uploads/2023/11/Joao-Neves.jpg',
            sport_name : 'Soccer',
            sport_theme_color: 'sport-purple',
            date : 'August 06, 2025',
            content_title : `Arsenal Eyes €55M Move for Joao Neves as Midfield Reinforcement`,
            col_span :'col-span-1',
        }
    },

];

export const premierspotlightDefaultData : PremierSpotlightsProps = {
    principal_team : SportNewsCardDefaultData,

    last_match_result : {
        args : {
            team1_logo : " ",
            team1_name : " ",
            team1_goals : 0,
            team2_logo : " ",
            team2_name : "",
            team2_goals : 0,
        },
    },
    
    next_match : {
        args : {
            team1_logo : " ",
            team1_name : " null ",
            game_date : " null",
            game_hour : "null",
            team2_logo : " ",
            team2_name : " ",
        },
    },
    
    league_position : { 
        args : {
            team_logo : "",
            team_name : "null",
            team_rank : "null",
        }
    },

    spotight_info_1 : SportNewsSMCardDefaultData,

    spotight_info_2 : SportNewsSMCardDefaultData,

}

export const premier_spotlight_data : PremierSpotlightsProps  [] = [

    {
        principal_team : {
            args : {
                background_img_url : 'https://www.arsenalstation.com/wp-content/uploads/2023/11/Joao-Neves.jpg',
                sport_name : 'Soccer',
                sport_theme_color: 'sport-purple',
                date : 'August 06, 2025',
                content_title : `Arsenal Eyes €55M Move for Joao Neves as Midfield Reinforcement`,
                col_span :'col-span-1',
            }
        },

        last_match_result: {
            args : {
                team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png",
                team1_name : "Arsenal",
                team1_goals : 0,
                team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/323px-Newcastle_United_Logo.svg.png",
                team2_name : "Newcastle",
                team2_goals : 0,
            },
        },
        
        next_match : {
            args : {
                team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png",
                team1_name : "Arsenal",
                game_date : "Sunday",
                game_hour : "10 AM",
                team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/195px-Tottenham_Hotspur.svg.png",
                team2_name : "Tottenham",
            },
        },
        
        league_position : { 
            args : {
                team_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png",
                team_name : "Arsenal",
                team_rank : "2nd",
            }
        },

        spotight_info_1 : {
            args : {
                spotlight_title : "Player Spotlight : Bukayo Saka ",
                spotlight_info : "4 assists in the last 5 games ", 
            }
        },

        spotight_info_2 : {
            args : {
                spotlight_title : "Did you know ? ",
                spotlight_info : "Arsenal's current unbeaten home streak (18 matches) is their longest since 2004's invicibles season", 
            }
        },

    },

];
