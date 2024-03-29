import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from '@mui/icons-material/Info';
import InterestsIcon from '@mui/icons-material/Interests';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split("/")[2]);
    const usersAPI = process.env.REACT_APP_PROFILE_API_USERS;
    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get(usersAPI + userId).then((res) => {
            return res.data;
        })
    );

    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/profile/edit`);
    };

    return (
        <div className="profile">
            {isLoading ? (
                "Loading profile information..."
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (

                <div className="profileContainer">
                    <div className="uInfo">
                        <div className="center-items">
                            <div className="center">
                                <div className="name">
                                    <span>{data.name}</span>
                                </div>
                                <div className="info">
                                    <div className="item">
                                        <PlaceIcon />
                                        <span>{data.city}</span>
                                    </div>
                                    <div className="item">
                                        <LanguageIcon />
                                        <span>{data.website}</span>
                                    </div>
                                    <div className="item">
                                        <InfoIcon />
                                        <span>{data.about_me}</span>
                                    </div>
                                    <div className="item">
                                        <InterestsIcon />
                                        <span>{data.interests}</span>
                                    </div>
                                </div>
                            </div>
                            {userId === currentUser.id && (
                                <div className="update-profile">
                                    <button onClick={handleUpdate}>Update Profile</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div>
    );
};

export default Profile;