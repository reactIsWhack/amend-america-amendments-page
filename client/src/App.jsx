import { useState } from 'react'
import ArticlesGrid from './pages/ArticlesGrid/ArticlesGrid'
import './App.css';
import { createBrowserRouter, Link } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import FullArticle from './pages/FullArticle/FullArticle';
import RootLayout from './pages/RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <ArticlesGrid /> },
      { path: '/article/:articleNumber', element: <FullArticle /> },
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
