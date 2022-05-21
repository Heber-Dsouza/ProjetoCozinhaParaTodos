import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

import Header from '../components/Header/Header'
import TermsPage from '../pages/TermsPage/TermsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/entrar' element={<LoginPage />} />
        <Route path='/cadastrar' element={<SignupPage />} />

        <Route index element={<RecipeListPage />} />

        <Route path='/detalhe/:id' element={<RecipeDetailPage />} />
        <Route path='/adicionar-receita' element={<AddRecipesPage />} />
        <Route path='/cadastrar/termos' element={<TermsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router