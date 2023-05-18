import { NavLink } from "react-router-dom/cjs/react-router-dom"


function NavBar(){
    return (
      <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/summon_traveler">New Traveler</NavLink>
        <NavLink to="/search_traveler">Traveler List</NavLink>
        <NavLink to="/octopath_traveler">Octopath Traveler</NavLink>
        <NavLink to="/octopath_traveler_two">Octopath Traveler Two</NavLink>
      </nav>
    )
}

export default NavBar