import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    if (userId === currentUser.id) {
      setOpenUpdate(true);
    } else {
      mutation.mutate(relationshipData.includes(currentUser.id));
    }
  };

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/profile/edit`);
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/" + data.coverPic} alt="" className="cover" />
            <img src={"/upload/" + data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="center-items">
                <div className="center">
                  <span>{data.name}</span>
                  <div className="info">
                    <div className="item">
                      <PlaceIcon />
                      <span>{data.city}</span>
                    </div>
                    <div className="item">
                      <LanguageIcon />
                      <span>{data.website}</span>
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
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
