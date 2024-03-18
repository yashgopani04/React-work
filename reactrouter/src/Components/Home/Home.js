import React from 'react'
import './Home.css'


function Home() {

  return (

    <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to My Website</h1>
                <p>Discover amazing things here</p>
            </div>
            <div className="features-section">
                <h2>Key Features</h2>
                <ul>
                    <li>Easy to use</li>
                    <li>Beautiful design</li>
                    <li>Fast loading times</li>
                    <li>Responsive layout</li>
                </ul>
            </div>
        </div>
  )
}

export default Home