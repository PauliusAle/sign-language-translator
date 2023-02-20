import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { addTranslations } from '../../api/UserApi';
import {storageSave} from '../../utils/storage'
import { STORAGE_KEY_USER } from '../../const/storageKeys';

function TranslationForm({user, setUser, setTranslationInput}) {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    
    const translationConfig = {
        required: true,
        minLength: 1,
        maxLength: 40,
    }
    
    const onSubmit = async({translation}) => {
        setIsLoading(true)
        const [error, userResponse] = await addTranslations(user.id, [translation, ...user.translations])
        if(error === null){
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse)
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
            onChange={e => setTranslationInput(e.target.value)}
            ></input>

            <button type="submit"
                disabled={isLoading}>Translate</button>
        </form> 
            { errors.name && <p>Something went wrong!</p>}
    </div>
    )
}

export default TranslationForm
