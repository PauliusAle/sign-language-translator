import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { addTranslations } from '../../api/UserApi';
import {storageSave} from '../../utils/storage'
import { STORAGE_KEY_USER } from '../../const/storageKeys';

function TranslationForm({user,setUser, setInput}) {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [userTranslations, setUserTranslations] = useState(user.translations);
    let translationInput = React.createRef();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const translationConfig = {
        required: false,
        minLength: 5,
        maxLength: 40,
    }

    const changeState = () => {
        setUserTranslations((prevTranslations) => prevTranslations?
            [translationInput.current.value, ...prevTranslations]: null);
        setInput(translationInput.current.value);
    }

    const onSubmit = async({translation}) => {
        setIsLoading(true)
        const [error, userResponse] = await addTranslations(user.id, userTranslations)
        if(error === null){
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse)
        } else{
            console.log(error)
            setHasError(true);
        }
        setIsLoading(false)
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register("translation", translationConfig)}
            type = "text" 
            placeholder = 'What to translate?'
            ref = {translationInput}
            ></input>

            <button type="submit" onClick={changeState} disabled={isLoading}>Translate</button>
        </form> 
            { hasError && <p>Something went wrong!</p>}
    </div>
    )
}

export default TranslationForm
