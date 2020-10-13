import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const defaultValues ={
    username: '',
    password: ''
}

const Login = props => {
    const [formValues, setFormValues] = useState(defaultValues)
    const history = useHistory()

    const onChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    } 

    const submit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                console.log(res.data)
                window.localStorage.setItem('token', res.data.payload)
                history.push("/friends");
            })
            .catch(err => 
                console.log(err))
    }

    return (
        <div>   
            <form onSubmit={submit}>
                <label>Username:
                    <input onChange={onChange} type='text' name='username' value={formValues.username} />
                </label>

                <label>Password:
                    <input onChange={onChange} type='password' name='password' value={formValues.password} />
                </label>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login