import { UserCard } from "./UserCard/userCard";
import PageTitle from "./pageTitle";
import Header from "./Header/header";

const App =() => {
 
    const title = "welcome to my app";
    const users: UserCard[] = [
        {name:"Alice", age:25 },
         {name:"Bob", age:30 },
          {name:"Charlie", age:35 }
    ];

    return(
        <div>
           <header>title={title}</header>
        </div>
    );
};
export default App;