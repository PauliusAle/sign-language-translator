import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateUserTranslations } from "../../api/UserApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

//Component for taking input and calling the API.
function TranslationForm({ user, setUser, setTranslationInput }) {
  const {
    register,
    handleSubmit,
  } = useForm(); //useForm hook from React-hook-library

  const [isLoading, setIsLoading] = useState(false);
  //Validation for Input
  const translationConfig = {
    required: true,
    minLength: 1,
    maxLength: 40,
  };

  //Called on submit via submit button click.
  const onSubmit = async ({ translation }) => {
    setIsLoading(true); //used for disabling buttons.
    setTranslationInput(translation);//Set Translation input state in Page to given translation.
    const [error, userResponse] = await updateUserTranslations(user.id, [ //API call with user id and...
      translation,//new translation in front of the list.
      ...user.translations, //and already existing translations.
    ]);
    if (error === null) { //if no error
      storageSave(STORAGE_KEY_USER, userResponse); //update local storage.
      setUser(userResponse); //update global user state with the new translation list.
    }
    setIsLoading(false);
  };

  return (
    <div id="translation-form" className="submit-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-text"
          {...register("translation", translationConfig)}// used for retrieving the input value and applying validation.
          type="text"
          placeholder="What to translate?"
        ></input>

        <button className="submit-button" type="submit" disabled={isLoading}>
          Translate
        </button>
      </form>
    </div>
  );
}

export default TranslationForm;
