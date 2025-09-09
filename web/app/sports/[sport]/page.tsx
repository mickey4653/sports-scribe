import SoccerPage from "@/components/sports/soccer";

interface SportPageProps {
  params: {
    sport: string;
  };
}


/** Main */
export default function SportPage({ params }: SportPageProps) {

  return (
    <>
      {/**
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {params.sport} Articles
        </h1>
      </div> 
      */}
     
     <SoccerPage />

    </>
  );
}
