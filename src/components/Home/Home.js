import React from 'react';
import fakedata from '../../fakeData/engineer'
import {useState} from 'react'
import Profile from "../Profile/Profile"
import "./Home.css"
import Compute from '../Compute/Compute';


const Home = () => {
    const allUsers = fakedata.slice(0,16)
    const [users, setUsers] = useState(allUsers);
    
    
    return (
        <div className = "home-page">
            <div className = "profile-part">
                {
                    users.map( user => <Profile users = {user}></Profile>)
                }
            </div>
            <div className = "compute-part">
                <Compute></Compute>
            </div>
        </div>
    );
};

export default Home;