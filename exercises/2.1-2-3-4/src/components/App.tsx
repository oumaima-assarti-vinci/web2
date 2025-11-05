import Cinema from "../components/Cinema";
import { type Movie } from "../types";
import PageTitle from "./PageTitle";

const App = () => {
  const pageTitle = "informations sur les films dans les cinémas";
  const cinema1Name= "UGC DEbrouckère";
 
  const movies1: Movie[] = [
    { title: "HAIKYU", director: "Susumu Mitsunaka" },
    { title: "GOODBYE JULIA", director: "Mohamed Kordofani" },
  ];
  const cinema2Name="UGC Toison d'or";

  const movies2: Movie[] = [
    { title: "THE WATCHERS", director: "Ishana Night Shyamalan" },
    { title: "BAD BOYS", director: "Adil El Arbi, Bilall Fallah" },
  ];

  return (
    <div>
      <PageTitle title={pageTitle}/>
      <Cinema name={cinema1Name} movies={movies1} />
      <Cinema name={cinema2Name} movies={movies2} />
    </div>
  );
};

export default App;