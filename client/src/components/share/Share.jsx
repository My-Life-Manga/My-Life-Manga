import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import deepai from "deepai";
import { makeRequest } from "../../axios";
import Image from "../../assets/img.png";
import Friend from "../../assets/friend.png";
import "./share.scss";

deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K"); // Replace with your DeepAI API key

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [styleOption, setStyleOption] = useState("");
  const [styledImage, setStyledImage] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  useEffect(() => {
    const applyStyle = async () => {
      if (file) {
        const imgUrl = await upload();
        const requestData = new FormData();
        requestData.append("image", imgUrl);
        requestData.append("option", styleOption);
        const config = {
          headers: {
            "X-RapidAPI-Key": "your-rapidapi-key",
            "X-RapidAPI-Host": "photo-editor.p.rapidapi.com",
          },
        };
        try {
          const response = await axios.post(
            "https://photo-editor.p.rapidapi.com/editor/",
            requestData,
            config
          );
          const deepaiResponse = await deepai.callStandardApi("neural-style", {
            content: imgUrl,
            style: response.data.url,
          });
          setStyledImage(deepaiResponse.output_url);
        } catch (error) {
          console.error(error);
        }
      } else {
        setStyledImage(null);
      }
    };
    applyStyle();
  }, [file, styleOption]);

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    let imageFile = null;

    if (file) {
      imageFile = file;
      imgUrl = await upload();
    }

    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  const handleStyleChange = (event) => {
    setStyleOption(event.target.value);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <div className="preview-container">
                <img className="file-preview" alt="" src={URL.createObjectURL(file)} />
              </div>
            )}
            {styledImage && (
              <div className="preview-container">
                <img className="styled-file-preview" alt="" src={styledImage} />
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
            <div className="item">
              <select value={styleOption} onChange={handleStyleChange}>
                <option value="">Select Style Option</option>
                <option value="mosaic">Mosaic</option>
                <option value="paint">Paint</option>
                <option value="hokusai">Hokusai</option>
              </select>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default Share;