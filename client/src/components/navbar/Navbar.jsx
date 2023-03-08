import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkModeContext";
import {AuthContext} from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser, setCurrentUser} = useContext(AuthContext);

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
          <HomeOutlinedIcon/>
        </NavLink>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle}/>
        ) : (
          <DarkModeOutlinedIcon onClick={toggle}/>
        )}
        {/*<GridViewOutlinedIcon/>*/}
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
      <div className="right">
        {/*<PersonOutlinedIcon />*/}
        <NavLink to={`/profile/${currentUser.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"
               className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
        </NavLink>
        {/*<EmailOutlinedIcon/>*/}
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={"/upload/" + currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
