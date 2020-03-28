import React from "react";
import "./nav.css";
import Logo from "./Logo.png";


function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/huddle">
        <img className="brand-image" alt="Logo" src={Logo}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a class="nav-link" href="/huddle">Huddle <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a class="nav-link" href="/active">Active <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a class="nav-link" href="/snap">Snap <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a class="nav-link" href="/profile">Profile <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>



    </div>
  );


}

export default Nav;

