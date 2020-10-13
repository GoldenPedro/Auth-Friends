import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const defaultValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
}

const FriendsList = props => {
    const [friends, setFriends] = useState([])
    const [formValues, setFormValues] = useState(defaultValues)

    const getFriends = () => {
        axiosWithAuth()
            .get('/friends')
                .then(res => {
                    setFriends(res.data)
                })
    }

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
                .then(res => {
                    setFriends(res.data)
                })
                
        }, [])


    const onChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    } 

    const submit = (event) => {
         event.preventDefault();
         axiosWithAuth()
            .post('/friends', formValues)
                .then(res => {
                    console.log(res.data)
                    getFriends()
                })
            
    }

    return (
        <div>
            <div>
                <form onSubmit={submit}>
                <label>Id:
                    <input onChange={onChange} type='number' name='id' value={formValues.id} />
                </label>

                <label>Name:
                    <input onChange={onChange} type='text' name='name' value={formValues.username} />
                </label>

                <label>Age:
                    <input onChange={onChange} type='number' name='age' value={formValues.password} />
                </label>
                <label>Email:
                    <input onChange={onChange} type='text' name='email' value={formValues.password} />
                </label>
                <button>Submit</button>
                </form>
            </div>


            {
                friends.map(friend => (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FriendsList