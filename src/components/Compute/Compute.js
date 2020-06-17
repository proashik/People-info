import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserFriends, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import './Compute.css'


const Compute = (props) => {
    const fd = props.totalFd;
    console.log(fd);
    
    let totalSalary = 0;
    for(let i=0; i<fd.length; i++){
        const person = fd[i];
        totalSalary += person.salary;
        
    }

    return (
        <div className = "compute-cart">
            <h3><FontAwesomeIcon icon={faUserFriends} /> Friends:<span className = "friends"> {fd.length}</span></h3>
            <h3><FontAwesomeIcon icon={faMoneyBill} /> Total salary:<span className = "total-salary"> {totalSalary}</span></h3>
        </div>
    );
};

export default Compute;