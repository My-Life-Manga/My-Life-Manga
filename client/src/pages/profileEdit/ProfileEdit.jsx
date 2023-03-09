import "./profileEdit.scss";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const updateMutation = useMutation(
    (formData) => makeRequest.put("/users/" + userId, formData),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("website", website);
    if (coverPic) {
      formData.append("coverPic", coverPic);
    }
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    updateMutation.mutate(formData);
  };

  return (
    <div className="profileEdit">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/"+data.coverPic} alt="" className="cover" />
            <img src={"/upload/"+data.profilePic} alt="" className="profilePic" />
          </div>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <div>
              <label htmlFor="coverPic">Cover Photo:</label>
              <input
                type="file"
                id="coverPic"
                accept="image/*"
                onChange={(e) => setCoverPic(e.target.files[0])}
              />
            </div>
            <div>
              <label htmlFor="profilePic">Profile Photo:</label>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </div>
            <button type="submit">Update Profile</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ProfileEdit;
