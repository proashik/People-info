import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Profile.css"


const Profile = (props) => {
    
    const {url, nickName, name, email, phone, salary, profession} = (props.users);
    
    return (
        <div className = "profile">
            <div>
                <img className = "profile-image" src={url} alt=""/>
                <h1 className = "nick-name">{nickName}</h1>
            </div>
            <div className = "profile-info">
                <h2 className = "name">Name: {name}</h2>
                <h4 className = "blue"><small>Email: {email}</small></h4>
                <h4 className = "blue">Profession: {profession}</h4>
                <h4 className = "blue">Phone no: {phone}</h4>
                <h3 className = "salary">Salary: {salary}</h3>
                <button className = "button" onClick = {() => props.addFriends(props.users)}><FontAwesomeIcon icon={faPlus} /> Add friend</button>
            </div>
        </div>
    );
};

export default Profile;