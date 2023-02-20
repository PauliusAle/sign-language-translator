import React from 'react'
import ProfileActions from '../components/profile/ProfileActions'
import Header from '../components/Header'
import ProfileTranslationHistory from '../components/profile/ProfileTranslationHistory'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'

function ProfilePage() {
  const { user } = useUser();

  return (
    <>
      <Header username={user.username}/>
      <ProfileTranslationHistory translations={user.translations}/>
      <ProfileActions/>
    </>
  )
}

export default withAuth(ProfilePage)