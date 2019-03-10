import React from 'react';

import "antd/dist/antd.css"
import './admin.less'
import Nav from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="main">
                    <Header></Header>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
