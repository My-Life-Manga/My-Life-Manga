import {useState, useEffect, useContext} from "react";
import "./navbar.scss";
import icons from './icons';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {AuthContext} from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    fetch("/api/notifications/get")
      .then((res) => res.json())
      .then((data) => setUnreadNotifications(data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>MangaLife</span>
        </Link>
        <NavLink to="/">
          <icons.HomeOutlinedIcon/>
        </NavLink>
        {darkMode ? (<icons.WbSunnyOutlinedIcon onClick={toggle}/>) : (<icons.DarkModeOutlinedIcon onClick={toggle}/>)}
      </div>
      <div className="right">
        {unreadNotifications.length > 0 ? (
          <div className="notification-badge">{unreadNotifications.length}</div>) : null}
        <icons.NotificationsOutlinedIcon/>
        <div className="user">
          <NavLink to={`/profile/${currentUser.id}`}>
            <img src={"/upload/" + currentUser.profilePic} alt=""/>
          </NavLink>
        </div>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;