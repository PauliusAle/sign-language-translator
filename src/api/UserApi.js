import { createHeaders } from "./IndexApi";
const apiUrl = process.env.REACT_APP_API_URL;

//async functions to check if user exists in the database.
const checkForUser = async (username) => {
  try {
    const response = await fetch(apiUrl + "?username=" + username); //fetch user with given username
    if (!response.ok) { //if something wrong with response.
      throw new Error("Something went wrong!");
    }
    const data = await response.json(); //if no error set data to response in JSON format
    return [null, data]; // return error=null and data.
  } catch (error) { // if error
    return [error.message, []]; //return error msg and empty array.
  }
};

//Async function to create user.
const createNewUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {//accessing api with URL
      method: "POST", // setting method to POST(create)
      headers: createHeaders(), //Defining headers with our API_KEY
      body: JSON.stringify({ //setting request body from JSON format to string
        username, //username as given
        translations: [], // initially translations are empty
      }),
    });

    if (!response.ok) { // if response not ok
      throw new Error("Something went wrong!");
    }
    const data = await response.json(); // setting data to response in JSON format, 201- returns created object in response.
    return [null, data]; // return error=null and data.
  } catch (error) { // if error
    return [error.message, []]; //return error msg and empty array.
  }
};

//Async function to login user - either GET or POST
export const loginUser = async (username) => {
  const [error, user] = await checkForUser(username); //first try to call GET call to fetch an existing user.
  if (error !== null) {
    return [error, null];
  }
  if (user.length > 0) { //if user list is more than 0
    return [null, user.pop()]; //get first user returned - needed because searching with username can find multiple users.
  }
  //If no existing user was found, create new user.
  return createNewUser(username);
};

//Async function to update translations of a user.
export const updateUserTranslations = async (id, translations) => {//must find user using id. otherwise several users can be updated.
  try {
    const response = await fetch(apiUrl + "/" + id, { //finding user.
      method: "PATCH", //API PATCH method.
      headers: createHeaders(), // creating header - must for all other methods than GET.
      body: JSON.stringify({ //JSON to String
        translations: translations, // setting existing translation to those given as param.
      }),
    });
    if (!response.ok) { //if response not ok.
      throw new Error("Something went wrong!");
    }

    const data = await response.json();//response as JSON.
    return [null, data];  // return error=null and data.
  } catch (error) {
    return [error.message, []]; //return error msg and empty array.
  }
};
