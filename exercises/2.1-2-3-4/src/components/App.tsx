import Cinema from "../components/Cinema";
import { type Movie } from "../types";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Header from "./Header";

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
      <Header urlLogo="https://images.unsplash.com/photo-1755445477542-649565d2c985?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <h1> tous les films</h1>
      </Header>
      <main className="page">
      <PageTitle title={pageTitle}/>
      <Cinema name={cinema1Name} movies={movies1} />
      <Cinema name={cinema2Name} movies={movies2} />
    </main>
    <Footer urlLogo="https://images.unsplash.com/photo-1627133805065-5083466be4f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D">
    <p> Cinema bruxelles</p>
    </Footer>
    </div>
  );
};

export default App;