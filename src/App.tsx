import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Post} from "layout/sections/posts/Post";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";
import {Projects} from "layout/sections/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Post/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;

