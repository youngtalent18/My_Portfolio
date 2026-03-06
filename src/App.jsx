import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import profileImg from "./assets/favicon.ico"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <div>
        <Toaster position="top-center"/>
        <Header profileImg={profileImg} />
        <Home />
        <About />
        <Projects />
        <Contact/>
        <Footer />
    </div>
  )
}

export default App
