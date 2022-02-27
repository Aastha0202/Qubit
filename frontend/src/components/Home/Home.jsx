import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import AskQuestion from '../AskQuestion/AskQuestion';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import "./Home.css";
import Rightbar from '../Rightbar/Rightbar';
import { Users } from '../../dummyData'
export default class Home extends Component {
    render() {
        return (
            <div>
 
                <Navbar />
                <div className="homeContainer">
                    <Sidebar />
                    <Feed  />
                    <Rightbar />
                </div>



            </div>
        )
    }
}

