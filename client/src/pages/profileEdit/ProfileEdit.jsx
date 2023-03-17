import "./profileEdit.scss";
import { useState, useContext, useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [interests, setInterests] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;

  const { isLoading, error, data } = useQuery(["user"], () =>
      makeRequest.get("/users/find/" + userId).then((res) => res.data)
  );

  useEffect(() => {
    if (!isLoading && data) {
      setName(data.name);
      setCity(data.city);
      setWebsite(data.website);
      setInterests(data.interests);
      setAboutMe(data.about_me);
    }
  }, [isLoading, data]);

  const queryClient = useQueryClient();

  const updateMutation = useMutation(
      (formData) => makeRequest.put("/users/update", formData),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["user"]);
        },
      }
  );

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("website", website);
    formData.append("interests", interests);
    formData.append("about_me", aboutMe);
    if (coverPic) {
      formData.append("coverPic", coverPic);
    }
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await makeRequest.put("/users/update", formData);
      if (response.status === 200) {
        // Invalidate the "user" query in the query cache to trigger a refetch
        queryClient.invalidateQueries("user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleUpdate(e);
  };

  return (
      <div className="profileEdit">
        {isLoading ? (
            "loading"
        ) : (
            <>
              <div className="images">
                <img
                    src={`/upload/${data.coverPic}`}
                    alt=""
                    className="cover"
                />
                <img
                    src={`/upload/${data.profilePic}`}
                    alt=""
                    className="profilePic"
                />
              </div>
              <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="profile-input"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    className="profile-input"
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Website"
                    value={website}
                    className="profile-input"
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <textarea
                    placeholder="Interests"
                    value={interests}
                    className="profile-input"
                    onChange={(e) => setInterests(e.target.value)}
                />
                <textarea
                    placeholder="About Me"
                    value={aboutMe}
                    className="profile-input"
                    onChange={(e) => setAboutMe(e.target.value)}
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
                  <div className="profile-pic">
                  <label htmlFor="profilePic">Profile Photo:</label>
                  <input
                      type="file"
                      id="profilePic"
                      accept="image/*"
                      onChange={(e) => setProfilePic(e.target.files[0])}
                  />
                </div>
                </div>
                <button onClick={handleClick}>Save Changes</button>
              </form>
            </>
        )}
      </div>
  );

};

export default ProfileEdit;
