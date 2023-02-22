export const createHeaders = () => { //function to generate headers for API calls.
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : process.env.REACT_APP_API_KEY
    }
}