import React from "react";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { storageDelete, storageSave } from "../../utils/storage";
import { updateUserTranslations } from "../../api/UserApi";
//Component for Actions in profile page(only buttons)
function ProfileActions({ user, setUser }) {

  //Handling logout button click
  const handleLogoutClick = () => {
    const doLogout = window.confirm("Are you sure you want to logout?"); //Pop up to avoid miss clicks.
    if (doLogout) { //if 'Yes' chosen
      storageDelete(STORAGE_KEY_USER); //Remove user from local storage.
      setUser(null); //set global user state to null.
    }
  };

  //Handling delete history button
  const handleDeleteHistory = async () => {
    const doDelete = window.confirm("Are you sure you want to delete history?");//Pop up to avoid miss clicks.
    if (doDelete) { //if 'Yes' chosen
      const [error, userResponse] = await updateUserTranslations(user.id, []); //API call to update translation list to empty.
      if (error === null) { //If no error.
        storageSave(STORAGE_KEY_USER, userResponse); //set user in local storage to same as response after database is updated.
        setUser(userResponse);//set global user state to same as response after database is updated.
      } else {
        console.log(error); // show error if any
      }
    }
  };
  return (
    <div className="profile-buttons">
      <button className="button profile-button" onClick={handleLogoutClick}>
        Logout{" "}
      </button>
      {user.translations.length > 0 && ( // hide button if user does not have any translations.
        <button className="button profile-button" onClick={handleDeleteHistory}>
          Clear history
        </button>
      )}
    </div>
  );
}

export default ProfileActions;
