import react, { useEffect, useState } from "react";
import List from './list';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const Home = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [editData, setEditData] = useState();

    const navigate = useHistory();
    const location = useLocation();

    // if(location) {
    //     setEditData(JSON.parse(localStorage.getItem('user')));
    //     console.log(editData)
    //     if(editData) {
    //         var rahul = editData[location.state.input]
    //         console.log(rahul)
    //     }
    // }
    const changeValue = (event) => {
        const { name, value } = event.target;
        setInput(values => ({...values, [name]: value}))
    }

    const submitForm = (event) => {
        event.preventDefault();
        setError(validate(input));
        setIsSubmit(true);
        if(Object.keys(error).length === 0 && isSubmit) {
            var value = []
            var item = localStorage.getItem('user')
            console.log(item)
            if(item) {
                var storedData = JSON.parse(item)
                for (let i = 0; i < storedData.length; i++) {
                  value.push(storedData[i])
                }
            } 
                value.push(input)
            
    
            console.log(value)
            localStorage.setItem('user',JSON.stringify(value))
    
            navigate.push({
                pathname:  '/list',
            });
        }
        
    }

    useEffect(()=>{
        console.log(error)
        if(Object.keys(error).length === 0 && isSubmit) {
            console.log(input)
        }
    },[input])

    const validate = (values) => {
        console.log(values)
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!values.first) {
            errors.first = 'Firstname is required';
        }
        if(!values.last) {
            errors.last = 'Lastname is required';
        }
        // if(!values.username) {
        //     errors.userName = 'Username is required';
        // }
        if(!values.number) {
            console.log(values.number)
            errors.number = 'Number is required';
            console.log(errors.number)
        }
        if(!values.email) {
            errors.email = 'Email is required';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format';
        }
        if(!values.address) {
            errors.number = 'Address is required';
        }
        return errors
        console.log(errors)
    }

    return (
        <>
            <div>
            {/* <pre>{JSON.stringify(input, undefined, 2)}</pre> */}
                <form onSubmit={submitForm}>
                    <label>First Name:</label>
                        <input 
                            type="text" 
                            name="first" 
                            value={input.first || ""}
                            onChange={changeValue}
                        />
                    {error.first &&<p>{error.first}</p>}
                    <label>Last Name:</label>
                        <input 
                            type="text" 
                            name="last" 
                            value={input.last || ""}
                            onChange={changeValue}
                        />
                    {error.last &&<p>{error.last}</p>}
                    {/* <label>UserName:</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={input.username || ""}
                            onChange={changeValue}
                        />
                    {error.userName &&<p>{error.userName}</p>} */}
                    <label>Email:</label>
                        <input 
                            type="text" 
                            name="email" 
                            value={input.email || ""}
                            onChange={changeValue}
                        />
                    {error.email &&<p>{error.email}</p>}
                    <label>Phone Number:</label>
                        <input 
                            type="text" 
                            name="number" 
                            value={input.number || ""}
                            onChange={changeValue}
                        />
                    {error.number &&<p>{error.number}</p>}
                    {/* <label> Select you gender</label>
                    <select name="gender" name="gender" value={input.gender || ""} onChange={changeValue} >
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select> */}
                    <label>Address:</label>
                        <input 
                            type="text" 
                            name="address" 
                            value={input.address || ""}
                            onChange={changeValue}
                        />
                    {error.address &&<p>{error.address}</p>}
                    <button type="submit">Submit</button>
                    {/* <List 
                      text={input} 
                      /> */}
                </form>
            </div>
        </>
    )
}

export default Home