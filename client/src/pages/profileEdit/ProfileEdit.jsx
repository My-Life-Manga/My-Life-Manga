import React, { useState, useContext, useEffect } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import './profileEdit.scss';

const ProfileEdit = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [about_me, setAbout_Me] = useState('');
  const [interests, setInterests] = useState('');

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;

  const { isLoading, error, data } = useQuery(['user'], () =>
      makeRequest.get(`/users/find/${userId}`).then((res) => res.data)
  );

  useEffect(() => {
    if (!isLoading && data) {
      setName(data.name);
      setCity(data.city);
      setWebsite(data.website);
      setAbout_Me(data.about_me);
      setInterests(data.interests);
    }
  }, [isLoading, data]);

  const queryClient = useQueryClient();

  const updateMutation = useMutation(
      (formData) =>
          makeRequest.put(`/users/update/${userId}`, formData, {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
            },
          }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['user']);
          navigate(`/profile/${userId}`);
        },
      }
  );

  const handleUpdate = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      city,
      website,
      about_me,
      interests,
    };

    console.log('userData:', userData); // Log userData to verify the content

    updateMutation.mutate(userData);
  };



  return (
      <div className="profileEdit">
        {isLoading ? (
            'loading'
        ) : (
            <>
              <div class="avatar"></div>
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
                <input
                    type="text"
                    placeholder="About_Me"
                    value={about_me}
                    className="profile-input"
                    onChange={(e) => setAbout_Me(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Interests"
                    value={interests}
                    className="profile-input"
                    onChange={(e) => setInterests(e.target.value)}
                />
                <button type="submit">Save Changes</button>
              </form>
            </>
        )}
      </div>
  );
};

export default ProfileEdit;