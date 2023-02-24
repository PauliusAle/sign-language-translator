import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/UserApi";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { FaArrowRight } from "../../../node_modules/react-icons/fa";

//Component to handle login input and API call.
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm(); //useForm hook from React-hook-library

  const { user, setUser } = useUser(null); //User object - initially null
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const nameConfig = { required: true, minLength: 2, maxLength: 20 };//Input validation

  useEffect(() => {
    if (user !== null) {
      navigate("/translation");
    }
  }, [user, navigate]);

  //On submit function that is handled by react-form and triggered by submit button.
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username); //loginUser API call with given username
    if (error === null) {
      storageSave(STORAGE_KEY_USER, userResponse); //create user in local storage.
      setUser(userResponse); //set global user state to the response from API call.
    }
    setLoading(false);
  };

  const errorMsg = (() => {
    if(!errors.username){
      return null;
    }
    if(errors.username.type === "required"){
      return <p>Username is required!</p>
    }
    if(errors.username.type === "minLength" || errors.username.type === "maxLength"){
      return <p>Username must be 2 - 20 characters long!</p>
    }
  })()
  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-text"
          id="loginInput"
          type="text"
          {...register("username", nameConfig)} //retrieving input and applying validation.
          placeholder="What's your name?"
        />
        <button
          className="button submit-button"
          id="loginButton"
          type="submit"
          disabled={loading}
        >
         <FaArrowRight className="fa-arrow-right"/>
        </button>
      </form>
      { errorMsg }
    </div>
  );
}

export default LoginForm;
