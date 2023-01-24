import { useState } from 'react'


import { Helmet } from 'react-helmet'
import { Navigate } from 'react-router'

function Error404() {
    document.title = "404 - Página não encontrada"
  return (
    <>
      <Helmet>
        <meta name="prerender-status-code" content="404"/>
        <title>404 - Página não encontrada</title>
      </Helmet>
      <h1>404 - Página não encontrada</h1>
    {/* <Navigate to="/"></Navigate> */}
    </>
  )
}

export default Error404
