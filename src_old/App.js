import ModuleTitle from "./components/ModuleTitle";
import CharacterLength from "./components/CharacterLength";
import Clicker from "./components/Clicker";
import LoginForm from "./components/LoginForm";
const App = () => {
    return (   
            <>
                <ModuleTitle myTitle="Front End Development"/>
                <ModuleTitle myTitle="Advanced JavaScript"/>

                <CharacterLength name="Johnny" age={30} occupation={{title:"Lecturer", years: 7}}/>
                <CharacterLength name="Gillian" age={26}/>
                <CharacterLength name="Jordan" age="20"/>
                <LoginForm/>
                <Clicker startFrom={0}/>
                <Clicker startFrom={10}/>
            </>
    );
};

export default App;
