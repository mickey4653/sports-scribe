import SoccerPage from "@/components/sports/soccer";

interface SportPageProps {
  params: {
    sport: string;
  };
}


/** Main */
export default function SportPage({ params }: SportPageProps) {

  switch (params.sport) {
    case 'soccer' : 
      return ( <SoccerPage /> );
    default : 
      return (<></>)
  }
  
}
