import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Post} from "layout/sections/posts/Post";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";
import {Home} from "layout/sections/home/Home";
import {Projects} from "layout/sections/projects/Projects";
import {Skills} from "layout/sections/skills/Skills";
import {AboutMe} from "layout/sections/about_me/AboutMe";
import {Abouts} from "layout/sections/about_me/Abouts";
import {Contact} from "layout/sections/contacts/Contact";
import {Container} from "components/Container";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Home/>
            <Projects/>
            <Skills/>
            <Abouts/>
            {/*<Post/>*/}
            {/*<Works/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

