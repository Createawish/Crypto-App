import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';
import {NavBar}from "./component";
import { Exchanges, Home, Cryptocurrencies, News, CryptoDetails} from './pages'
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
                            <Route exact path='/' element={ <Home/>}/>
                            <Route  path='/exchange' element={<Exchanges/>}/>
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                            <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                            <Route  path='/news' element={ <News/>}/>
                        </Routes>
                    </div>
                </Layout>
            <div className='footer' >
                <Typography.Title  level={5} style={{color: 'white',textAlign:'center'}}>
                    Cryptoverse<br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        </div>
        </div>
    );
};

export default App;