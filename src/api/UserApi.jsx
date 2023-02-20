import { createHeaders } from "./IndexApi";
const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
    try {
        const response = await fetch( apiUrl + "?username=" + username);
        if(!response.ok){
            throw new Error("Something went wrong!");
        }
        const data = await response.json();
        return [null,data]
    } catch (error){
        return [error.message,[]]
    }
}

const createNewUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });

        if(!response.ok){
            throw new Error("Something went wrong!");
        }
        const data = await response.json();
        return [null , data]
    } catch (error){
        return [error.message,[]]
    }
}

export const loginUser = async (username) => {
    const [error, user] = await checkForUser(username);
    if(error !== null){
        return [error, null]
    } 
    if(user.length > 0) {
        return [ null, user.pop() ]    
    }
    
    return createNewUser(username);
}


export const addTranslations = async(id, translations) => {
    try {
        const response = await fetch(apiUrl + '/' + id,{
            method:'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: translations
            })
        })
        if(!response.ok){
            throw new Error("Something went wrong!")
        }

        const data = await response.json()
        return [null, data]
    } catch (error){
        return [error.message, []]
    }
}