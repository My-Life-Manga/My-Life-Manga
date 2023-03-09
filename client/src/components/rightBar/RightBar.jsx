import "./rightBar.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const RightBar = () => {
  const { isLoading, error, data } = useQuery(["onlineUsers"], () =>
    makeRequest.get("/online-users").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p><span>Jane Doe</span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          {isLoading ? (
            "Loading online users..."
          ) : error ? (
            "Error fetching online users"
          ) : (
            <div className="users">
              {data.map((user) => (
                <div className="user">
                  <div className="userInfo">
                    <img src={user.profilePic} alt="" />
                    <div className="online" />
                    <span>{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
