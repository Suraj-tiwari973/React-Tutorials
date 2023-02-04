import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';


/*const app = (
    <h1>hello sir.</h1>
)
ReactDOM.render(app,document.getElementById('root'));*/

// Workinng with components..

function App(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'));