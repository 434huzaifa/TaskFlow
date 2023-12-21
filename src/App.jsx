import Banner from "./Banner"
import NavbarComponent from "./Navbar"
import Usedby from "./Usedby"

function App() {
  return (
    <div className="mx-5">
      <NavbarComponent></NavbarComponent>
      <div className="mx-5">
      <Banner></Banner>
      <Usedby />
      </div>
      
    </div>
  )
}

export default App
