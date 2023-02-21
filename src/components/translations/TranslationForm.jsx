import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addTranslations } from "../../api/UserApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

function TranslationForm({ user, setUser, setTranslationInput }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const translationConfig = {
    required: true,
    minLength: 1,
    maxLength: 40,
  };

  const onSubmit = async ({ translation }) => {
    setIsLoading(true);
    setTranslationInput(translation);
    const [error, userResponse] = await addTranslations(user.id, [translation, ...user.translations]);
    if (error === null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }

    setIsLoading(false);
  };

  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-text'
          {...register("translation", translationConfig)}
          type="text"
          placeholder="What to translate?"
        ></input>

        <button className='submit-button' type="submit" disabled={isLoading}>
          Translate
        </button>
      </form>
      {errors.name && <p>Something went wrong!</p>}
    </div>
  );
}

export default TranslationForm;
