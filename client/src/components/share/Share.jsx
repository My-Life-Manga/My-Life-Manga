import "./share.scss";
import Image from "../../assets/img.png";
import Friend from "../../assets/friend.png";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {makeRequest} from "../../axios";
import * as filestack from "filestack-js";


const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async (file) => {
    const fileStackKey = "AY6agpviiTKK3EIMMiDkHz";
    const client = filestack.init(fileStackKey);

    try {
      const res = await client.upload(file);
      return res.url;
    } catch (err) {
      console.log(err);
    }
  };

  const {currentUser} = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
      (newPost) => {
        return makeRequest.post("/posts", newPost);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["posts"]);
        },
      }
  );

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const url = await upload(file);
    setFile(url);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = file;
    else imgUrl = await upload();
    mutation.mutate({desc, img: imgUrl});
    setDesc("");
    setFile(null);
  };


  return (
      <div className="share">
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={"/upload/" + currentUser.profilePic} alt=""/>
              <input
                  type="text" placeholder={`What's on your mind ${currentUser.name}?`}
                  onChange={(e) => setDesc(e.target.value)} value={desc}
              />
            </div>
            <div className="right">
              {file && (<img className="file" alt="" src={file}/>)}
            </div>
          </div>
          <hr/>
          <div className="bottom">
            <div className="left">
              <input type="file" id="file" style={{display: "none"}} onChange={handleFileUpload}/>
              <label htmlFor="file">
                <div className="item">
                  <img src={Image} alt=""/>
                  <span>Add Image</span>
                </div>
              </label>
              <div className="item">
                <img src={Friend} alt=""/>
                <span>Tag Friends</span>
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