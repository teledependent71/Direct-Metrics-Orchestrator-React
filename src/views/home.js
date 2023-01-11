import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Metrics Orchestrator</title>
        <meta property="og:title" content="Direct Metrics Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
