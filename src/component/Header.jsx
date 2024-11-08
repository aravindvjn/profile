import React, { useState } from "react";

const Header = (props) => {
    const [activePage,setActivePage] = useState('1');
    const pageNoHandler=(e)=>{
        props.renderPage(e.target.id)
        setActivePage(e.target.id)
    }
  return (
    <div className="header">
      <header className="py-2 border-bottom header-custom">
        <p
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        ></p>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <p id="1"  onClick={pageNoHandler} className={activePage==='1'?"nav-link active-page" : "nav-link"} aria-current="page">
              Home
            </p>
          </li>
          <li className="nav-item">
            <p id="2" onClick={pageNoHandler} className={activePage==='2'?"nav-link active-page" : "nav-link"}>
              Skills
            </p>
          </li>
          <li className="nav-item">
            <p id="3" onClick={pageNoHandler} className={activePage==='3'?"nav-link active-page" : "nav-link"}>
              Projects
            </p>
          </li>
          <li className="nav-item">
            <p id="4" onClick={pageNoHandler} className={activePage==='4'?"nav-link active-page" : "nav-link"}>
              Education
            </p>
          </li>
          <li className="nav-item">
            <p id="5" onClick={pageNoHandler} className={activePage==='5'?"nav-link active-page" : "nav-link"}>
              Contact
            </p>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
