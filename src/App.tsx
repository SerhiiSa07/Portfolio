import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Post} from "layout/sections/posts/Post";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";
import {Home} from "layout/sections/home/Home";
import {Projects} from "layout/sections/projects/Projects";
import {Skills} from "layout/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Home/>
            <Projects/>
            <Skills/>
            {/*<Post/>*/}
            {/*<Works/>*/}
            <Footer/>
        </div>
    );
}

export default App;

