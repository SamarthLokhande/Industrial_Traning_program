import { Link  } from "react-router-dom";
const Navbar = () => {
        return(<>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Samarth Creation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ms-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/team" className="nav-link">Team</Link>
        </li>

        
      </ul>
    
        
    </div>
    </div>
</nav>
</>)
}
export default Navbar;