import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import Browse from './browse/Browse';
import Search from './search/Search';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
            <Header/>
            <div className="container">
                <Route path="/" exact render={() => <Home/>}></Route>
                <Route path="/browse" exact render={() => <Browse/>}></Route>
                <Route path="/search" exact render={() => <Search/>}></Route>
            </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;