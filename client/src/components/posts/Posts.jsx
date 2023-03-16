import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Posts = ({ userId }) => {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const { isLoading, error, data } = useQuery(["posts"], () =>
        makeRequest.get("/posts?userId=" + userId).then((res) => {
            return res.data;
        })
    );

    const handleImageLoad = (e) => {
        const aspectRatio = e.target.width / e.target.height;
        if (aspectRatio > 1) {
            e.target.classList.add("img-landscape");
        } else {
            e.target.classList.add("img-portrait");
        }
    };

    return (
        <div className="posts">
            {error ? (
                <span style={{ color: darkMode ? "#fff" : "#000" }}>
          Something went wrong!
        </span>
            ) : isLoading ? (
                <span style={{ color: darkMode ? "#fff" : "#000" }}>Loading</span>
            ) : (
                data.map((post) => (
                    <Post
                        post={post}
                        key={post.id}
                        image={post.img}
                        handleImageLoad={handleImageLoad}
                    />
                ))
            )}
        </div>
    );
};

export default Posts;