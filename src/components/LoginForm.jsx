import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../api/UserApi' 
import { storageSave } from '../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext';

function LoginForm() {
    
    const { register, handleSubmit, formState:{errors} } = useForm();//!
    const {user, setUser} = useUser(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const nameConfig =  {required:  true, minLength: 2,maxLength: 20}

    useEffect(() => {
         if(user !== null){
            navigate('/translation')
         }
    },[user, navigate])

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if(userResponse != null) {
            storageSave('translation-user',userResponse)
            setUser(userResponse);
        }
        setLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    id="loginInput" 
                    type="text"
                    {...register( "username", nameConfig)} //!!
                    placeholder="What's your name?" 
                 />
                 <button id="loginButton" type="submit" disabled={loading}>Login</button>
            </form>
            {errors.name && <p>Invalid name!</p>}
            {loading && <p>Loading user...</p>}
        </div>
    )
}

export default LoginForm