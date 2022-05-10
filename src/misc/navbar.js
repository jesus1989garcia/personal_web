  import { Link } from 'react-router-dom'
  
  function NavBar() {
    return (
      <div className="navbar">
        <div className="navbar-name">
          Jesús García
        </div>
        <div className="navbar-links">
          <Link to="skills"><h4>Skills</h4></Link>
          <Link to="projects"><h4>Projects</h4></Link>
          <Link to="contact"><h4>Contact</h4></Link>
        </div>
      </div>
    )
  }

  export default NavBar