import "./rightBar.scss";
import {useQuery} from "@tanstack/react-query";
import {makeRequest} from "../../axios";

const RightBar = () => {
  const {isLoading, error, data} = useQuery(["suggestionsForYou", "latestActivities", "onlineFriends"], async () => {
    try {
      const suggestionsRes = await makeRequest.get("/suggestions-for-you");
      const latestActivitiesRes = await makeRequest.get("/latest-activities");
      const onlineFriendsRes = await makeRequest.get("/online-friends");
      return {
        suggestions: suggestionsRes.data,
        latestActivities: latestActivitiesRes.data,
        onlineFriends: onlineFriendsRes.data
      };
    } catch (err) {
      throw new Error(err);
    }
  });

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {isLoading ? ("Loading suggestions...") : error ? ("Error fetching suggestions") : (
            <div className="users">
              {data.suggestions.map((user) => (
                <div className="user">
                  <div className="userInfo">
                    <img src={user.profilePic} alt=""/>
                    <span>{user.name}</span>
                  </div>
                  <div className="buttons">
                    <button>follow</button>
                    <button>dismiss</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {isLoading ? ("Loading latest activities...") : error ? ("Error fetching latest activities") : (
            <div className="users">
              {data.latestActivities.map((activity) => (
                <div className="user">
                  <div className="userInfo">
                    <img src={activity.user.profilePic} alt=""/>
                    <p><span>{activity.user.name}</span> {activity.action}</p>
                  </div>
                  <span>{activity.timestamp}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="item">
          <span>Online Friends</span>
          {isLoading ? ("Loading online users...") : error ? ("Error fetching online users") : (
            <div className="users">
              {data.onlineFriends.map((user) => (
                <div className="user">
                  <div className="userInfo">
                    <img src={user.profilePic} alt=""/>
                    <div className="online"/>
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
