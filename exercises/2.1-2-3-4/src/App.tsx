
const App = () => {
  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  const title = "bonjour";

  return (
    <div>
      <PageTitle title={title}/>

      <div>
        <h2>{cinema1Name}</h2>
        <ul>
          <li>
            <strong>{cinema1Movie1Title}</strong> - Réalisateur :{" "}
            {cinema1Movie1Director}
          </li>
          <li>
            <strong>{cinema1Movie2Title}</strong> - Réalisateur :{" "}
            {cinema1Movie2Director}
          </li>
        </ul>
      </div>

      <div>
        <h2>{cinema2Name}</h2>
        <ul>
          <li>
            <strong>{cinema2Movie1Title}</strong> - Réalisateur :{" "}
            {cinema2Movie1Director}
          </li>
          <li>
            <strong>{cinema2Movie2Title}</strong> - Réalisateur :{" "}
            {cinema2Movie2Director}
          </li>
        </ul>
      </div>
    </div>
  );
};


const PageTitle = (props : {title: String} )=> {
return(
  <h1> {props.title}</h1>
)

  };
  const Cinema = (props:{
    name:  string;
    movie1Title : String;
    movie1Director:String;
    movie2Title: String;
    movie2Director: String;
  })=>{
    return(
      <main>
     <div>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <strong>{props.movie1Title}</strong> - Réalisateur :{" "}
            {props.movie1Director}
          </li>
          <li>
            <strong>{props.movie2Title}</strong> - Réalisateur :{" "}
            {props.movie2Director}
          </li>
        </ul>
      </div>

</main>
  )
}


export default App;