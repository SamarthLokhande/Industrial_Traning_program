import React from 'react'

const Navbar = () => {
    return(
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
      <img src="https://exam.cwipedia.in/static/media/logo.b1608c3410267e144abd.png" alt="" width="30" height="24"/>
      <a class="navbar-brand" href="#">CWIPEDIA<a/>
    </a>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">team</a>
            </li>
                
              </ul>
              <ul>
            
    
          </ul>
          <form className="d-flex">
    
          </form>
        </div>
      </div>
    </nav>
    </>
        )
    }
    export default Navbar;