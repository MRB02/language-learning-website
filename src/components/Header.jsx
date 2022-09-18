import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <div className="container-fluid d-flex bg-light justify-content-center align-items-center">
        <img
          className="nihon-img"
          src="https://th.bing.com/th/id/R.08b929f50703702318ab155b92b074a1?rik=y3QckiNmTsupWA&pid=ImgRaw&r=0"
          alt="nihon img"
        />
        <p className="fw-bold fsize pt-2 ps-2">NihonGo|日本語</p>
      </div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <i className="fas fa-home"></i>
        </Link>
    <button className="navbar-toggler toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon toggle"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hammasi Yaponiya Haqida
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item active" to="/N5">JLPT N5 ga tayyorlov</Link></li>
            <li><Link className="dropdown-item" to="/Stories_Podcasts">Yaponcha Hikoylar va Podkastlar</Link></li>
            <li><Link className="dropdown-item" to="/traditions">Yaponiya urf-odatlari</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
