import { createContext, useState, useContext } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

//Create consumer-provider
const UserContext = createContext(); //

//Function that will return state object - similar to useSelector in react-redux.
export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  //declaring state and setting user default value to the one in local storage, if nothing there - null.
  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER)); 

  //state values
  const state = {
    user,
    setUser,
  };

  //Sett provider value to state and all children will have access to it.
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
