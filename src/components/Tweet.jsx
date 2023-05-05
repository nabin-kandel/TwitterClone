import Header from "./header";
import TweetBody from "./tweetbody";
import Footer from "./footer";

const Tweet = ({ name, username, time, tweet, image }) => {
    return (<div className="tweet">
        <img
            className="profile-pic"
            src="https://placekitten.com/50/50"
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header name={name} username={username} time={time} />
            <TweetBody tweet={tweet} image={image} />
            <Footer />
        </div>
    </div >);
};
export default Tweet;