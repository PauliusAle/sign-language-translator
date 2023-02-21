import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/UserApi' 
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

function LoginForm() {
    
    const { register, handleSubmit, formState:{errors} } = useForm();//!
    const { user, setUser } = useUser(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const nameConfig =  {required:  true, minLength: 2, maxLength: 20}

    useEffect(() => {
         if(user !== null){
            navigate('/translation')
         }
    },[user, navigate])

    const onSubmit = async ({username}) => {
        setLoading(true);
        console.log({username})
        const [error, userResponse] = await loginUser(username);
        if(error === null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse);
        }
        setLoading(false);
    }

    return (
        <div className='submit-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className='input-text'
                    id="loginInput" 
                    type="text"
                    {...register( "username", nameConfig)} //!!
                    placeholder="What's your name?" 
                 />
                 <button className='submit-button' id="loginButton" type="submit" disabled={loading}>Login</button>
            </form>
            {errors.name && <p>Invalid name!</p>}
        </div>
    )
}

export default LoginForm