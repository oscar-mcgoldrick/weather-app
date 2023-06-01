import Nav from './Nav'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <Header />
      <div className="main">
        <Nav />
        <Outlet />
      </div>
        <Footer />
    </>
  )
}

export default App
