import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Post} from "layout/sections/posts/Post";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Post/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;

