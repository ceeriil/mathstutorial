import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navigation() {
  const showMenu = () => {
    document.querySelector(".nav").classList.toggle("collapse");
  };

  return (
    <nav className="nav">
      <div className="nav-menu flex-row">
        <div className="nav-brand">
          <Link className="text-gray">
            <img
              src="https://mathswithmrsa.com/wp-content/uploads/2020/04/Drawing-129x88.png"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="toggle-collapse" onClick={() => showMenu()}>
          <div className="toggle-icons">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div>
          <ul className="nav-items">
            <Link to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/topics">
              <li className="nav-link">Topics & WorkSheets</li>
            </Link>
            <Link to="/videos">
              <li className="nav-link">Videos</li>
            </Link>
            <Link to="/about">
              <li className="nav-link">About Me</li>
            </Link>
            <Link to="/blog">
              <li className="nav-link">Blog</li>
            </Link>
          </ul>
        </div>
        <div class="search-box">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </nav>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     $(document).ready(function () {
//         $nav = $(".nav");
//         $toggleCollapse = $(".toggle-collapse");

//         /** click event on toggle menu */
//         $toggleCollapse.click(function () {
//           $nav.toggleClass("collapse");
//         });
//       });
//   }
// }

export default Navigation;
