import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const List = (props) => {
    const [data, setData] = useState()
    const [userData, setUserData] = useState()
    // const location = useLocation();
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem('user')));
    },[])
    // setUserData(JSON.parse(localStorage.getItem('user')));

    // userData = JSON.parse(userData)

    const navigate = useHistory();

    
    const editValue = (value) => {
        navigate.push({
            pathname:  '/',
            state: {input:value}
        });
    }

    const deleteData = (value) => {
        console.log(value)
        console.log(userData)

        userData.splice(value,1)
        console.log(userData)

        localStorage.setItem('user',JSON.stringify(userData))
        setUserData(JSON.parse(localStorage.getItem('user')));
        
        // var userData = localStorage.getItem('user');
        // userData = JSON.parse(userData)
        // console.log(userData)
    }

    

    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                    {userData?.map((item,index)=>{
                        return (
                            <>
                                <tr key={index}>
                                    <td >{item.first} {item.last}</td>
                                    <td >{item.email}</td>
                                    <td >{item.number}</td>
                                    <td >{item.address}</td>
                                    <td><i className="fa fa-trash-o edit" onClick={()=>deleteData(index)}></i>
                                        <i className="fa fa-edit edit" onClick={()=>editValue(index)}></i>
                                    </td>
                                </tr>
                            </>
                        )
                    })}                    
            </table>
        </>
    )
}

export default List