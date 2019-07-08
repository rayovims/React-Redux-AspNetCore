import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import Browse from './browse/Browse';
import Search from './search/Search';


class App extends React.Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                <div>
                <Header/>
                <div className="container">
                    <Route exact path="/" render={() => <Home/>}></Route>
                    <Route path="/browse" exact render={() => <Browse/>}></Route>
                    <Route path="/search" exact render={() => <Search/>}></Route>
                    <Route path="/test" component={() => <div>Hi</div>}/>
                </div>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;