import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';
import {NavBar}from "./component";
import { Exchanges, Home, Cryptocurrencies, News, CryptoDetails} from './pages/index'
import './App.css';
const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <NavBar/>
            </div>
            <div classNmae='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route exact path='/exchange'>
                                <Exchanges/>
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails/>
                            </Route>
                            <Route exact path='/news'>
                                <News/>
                            </Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'>

            </div>
        </div>
    );
};

export default App;