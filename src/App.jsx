import { Outlet } from "react-router-dom"
import FooterComponent from "./Footer"
import NavbarComponent from "./Navbar"

function App() {
  return (
    <div className="mx-5">
      <NavbarComponent></NavbarComponent>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
