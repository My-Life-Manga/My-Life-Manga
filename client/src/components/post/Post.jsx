import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import Comments from "../comments/Comments";
import moment from "moment";
import {useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import {makeRequest} from "../../axios";
import {AuthContext} from "../../context/authContext";
import icons from "./icons";
import "./post.scss";

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const {currentUser} = useContext(AuthContext);

    const likesAPI = process.env.REACT_APP_POST_POSTID_API
    const {isLoading: likesLoading, error: likesError, data: likesData} = useQuery(
        ["likes", post.id],
        () =>
            makeRequest.get(likesAPI + post.id).then((res) => {
                return res.data;
            })
    );

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (liked) => {
            if (liked) return makeRequest.delete(likesAPI + post.id);
            return makeRequest.post("/likes", {postId: post.id});
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["likes"]);
            },
        }
    );
    const postAPI = process.env.REACT_APP_POST_POSTS_API
    const deleteMutation = useMutation(
        (postId) => {
            return makeRequest.delete(postAPI + postId);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );

    const handleLike = () => {
        mutation.mutate(likesData.includes(currentUser.id));
    };

    const handleDelete = () => {
        deleteMutation.mutate(post.id);
    };

    const handleImageLoad = (e) => {
        const aspectRatio = e.target.width / e.target.height;
        if (aspectRatio > 1) {
            e.target.classList.add("img-landscape");
        } else {
            e.target.classList.add("img-portrait");
        }
    };

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={"/upload/" + post.profilePic} alt=""/>
                        <div className="details">
                            <Link
                                to={`/profile/${post.userId}`}
                                style={{textDecoration: "none", color: "inherit"}}
                            >
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <icons.MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)}/>
                    {menuOpen && post.userId === currentUser.id && (
                        <button onClick={handleDelete}>delete</button>
                    )}
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    {post.img && <img className={"uploaded-img"} src={post.img} alt=""/>}
                </div>
                <div className="info">
                    <div className="item">
                        {likesLoading ? (
                            "loading"
                        ) : likesData.includes(currentUser.id) ? (
                            <icons.FavoriteOutlinedIcon
                                style={{color: "red"}}
                                onClick={handleLike}
                            />
                        ) : (
                            <icons.FavoriteBorderOutlinedIcon onClick={handleLike}/>
                        )}
                        {likesData?.length} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <icons.TextsmsOutlinedIcon/>
                        See Comments
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    );
};

export default Post;