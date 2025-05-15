import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Bread from './components/Bread'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Confectionery from './components/Confectionery'
import History from './components/History'
import Parallax from './components/Parallax'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Bread />
      {/* <Parallax /> */}
      <Confectionery />
      <History />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
