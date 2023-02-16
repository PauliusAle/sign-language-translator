import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartupPage from "./pages/StartupPage";
import ProfilePage from "./pages/ProfilePage";
import TranslationPage from "./pages/TranslationPage";
import PageNotFound from "./pages/PageNotFound";

function PageNavigator() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<StartupPage/>} />
            <Route path="translation" element={<TranslationPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default PageNavigator