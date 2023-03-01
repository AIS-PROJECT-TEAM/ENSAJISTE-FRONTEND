import React from 'react'
import HomeNavBar from './homePageComponents/HomeNavBar'
import Main from './homePageComponents/Main'
import Slides from './homePageComponents/Slides'
import TopPage from './homePageComponents/TopPage'
import Footer from './homePageComponents/Footer'

function HomePage() {
  return (
    <div>
      <TopPage/>
      <Slides/>
      <HomeNavBar />
      <Main />
      <footer id="footer">
      <Footer/>

      </footer>
    </div>


  )
}

export default HomePage
