import {useState, useEffect, useContext} from "react";
import "./navbar.scss";
import icons from "./icons";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {AuthContext} from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser, logout} = useContext(AuthContext);
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = process.env.REACT_APP_NAVBAR_API;
        const res = await fetch(API);
        const data = await res.json();
        setUnreadNotifications(data);
      } catch (error) {
      }
    }
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{textDecoration: "none"}}>
            <span>MangaLife</span>
          </Link>
          <NavLink to="/">
            <icons.HomeOutlinedIcon className="home-svg" style={{color: darkMode ? "#fff" : "#000"}}/>
          </NavLink>
          {darkMode ? (
              <icons.WbSunnyOutlinedIcon onClick={toggle}/>
          ) : (
              <icons.DarkModeOutlinedIcon onClick={toggle}/>
          )}
          <NavLink to="/about">
            <icons.group style={{color: darkMode ? "#fff" : "#000"}}/>
          </NavLink>
        </div>
        <div className="right">
          {unreadNotifications.length > 0 ? (
              <div className="notification-badge">{unreadNotifications.length}</div>
          ) : null}
          <div className="user">
            <NavLink to={`/profile/${currentUser.id}`}>
              <img src={"/upload/" + currentUser.profilePic} alt=""/>
            </NavLink>
          </div>
          <a className="logout" onClick={handleLogout}>
            <icons.logout/>
          </a>
        </div>
      </div>
  );
};

export default Navbar;