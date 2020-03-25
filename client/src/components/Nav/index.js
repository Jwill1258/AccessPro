import React from "react";
import "./nav.css";
import "./logo.png";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <a className="navbar-brand" href="/huddle"><img src="logo.png" alt="Logo"></a> */}
      <a className="navbar-brand" href="/huddle">
        Huddle
      </a>
      <a className="navbar-brand" href="/active">
        Active
      </a>
      <a className="navbar-brand" href="/snap">
        Snap
      </a>
      <a className="navbar-brand" href="/profile">
        Profile
      </a>
     
    </nav>
  );
}

{/* <div className="collapse navbar-collapse" id="navbarsExample09">
<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <a className="nav-link" href="/huddle">Huddle <span class="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/active">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/snap">Snap</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/profile">Profile</a>
  </li>

</ul>
</nav> */}

export default Nav;
