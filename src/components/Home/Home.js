import React from 'react';
import fakedata from '../../fakeData/engineer'
import {useState} from 'react'
import Profile from "../Profile/Profile"
import "./Home.css"
import Compute from '../Compute/Compute';


const Home = () => {
    const allUsers = fakedata.slice(0,16)
    const [users, setUsers] = useState(allUsers);
    
    const [friend, setFriend] = useState([]);
    const addFriends = (friends) => {
        const friendList = [...friend, friends];
        setFriend(friendList);
        
    }
    console.log(friend)
    return (
        <div className = "home-page">
            <div className = "profile-part">
                {
                    users.map( user => <Profile users = {user} addFriends = {addFriends}></Profile>)
                }
            </div>
            <div className = "compute-part">
                <Compute totalFd = {friend}></Compute>
            </div>
        </div>
    );
};

export default Home;