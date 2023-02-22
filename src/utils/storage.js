//Function to save item(user) in the local storage.
export const storageSave = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Function to read item(user) in from the local storage.
export const storageRead = (key) => {
    const data = localStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
    return null;
}

//Function to remove item(user) from the local storage.
export const storageDelete = (key) => {
    localStorage.removeItem(key);
}