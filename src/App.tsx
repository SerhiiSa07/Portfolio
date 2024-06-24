import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";
import {Home} from "layout/sections/home/Home";
import {Skills} from "layout/sections/skills/Skills";
import {Abouts} from "layout/sections/about_me/Abouts";
import {Contact} from "layout/sections/contacts/Contact";
import {Particle} from "components/particle/Particle";
import {Projects} from "layout/sections/projects/Projects";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Home/>
            <Projects/>
            <Skills/>
            <Abouts/>
            {/*<Post/>*/}
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

