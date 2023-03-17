import {useContext, useState} from "react";
import "./comments.scss";
import Person4Icon from '@mui/icons-material/Person4';
import {AuthContext} from "../../context/authContext";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {makeRequest} from "../../axios";
import moment from "moment";

const Comments = ({postId}) => {
    const [desc, setDesc] = useState("");
    const {currentUser} = useContext(AuthContext);
    const postIdAPI = process.env.REACT_APP_COMMENTS_API;

    const {isLoading, error, data} = useQuery(
        ["comments"],
        () =>
            makeRequest
                .get(postIdAPI + postId)
                .then((res) => {
                    return res.data;
                })
    );

    const queryClient = useQueryClient();

    const API = process.env.REACT_APP_NAVBAR_COMMENTS
    const mutationAdd = useMutation(
        (newComment) => {
            return makeRequest.post(API, newComment);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const mutationDelete = useMutation(
        (commentId) => {
            return makeRequest.delete(`${API}/${commentId}`);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const handleClickAdd = async (e) => {
        e.preventDefault();
        mutationAdd.mutate({desc, postId});
        setDesc("");
    };

    const handleClickDelete = async (commentId) => {
        try {
            const result = await mutationDelete.mutateAsync(commentId);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="comments">
            <div className="write">
                <Person4Icon />
                <input
                    type="text"
                    placeholder="write a comment"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button onClick={handleClickAdd}>Send</button>
            </div>
            {error ? (
                "Something went wrong"
            ) : isLoading ? (
                "loading"
            ) : (
                data.map((comment, index) => (
                    <div className="comment" key={comment.id}>
                        <span className="comment-number">{index + 1}</span>
                        <Person4Icon />
                        {/*<img src={"/upload/" + comment.profilePic} alt=""/>*/}
                        <div className="info">
                            <span>{comment.username}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <div className={"right-side"}>
                            <p className="date">
                                {moment(comment.createdAt).fromNow()}
                                <br/>
                                {currentUser && currentUser.id === comment.userId && (
                                    <button className={"delete-comment"} onClick={() => handleClickDelete(comment.id)}>Delete</button>)}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comments;