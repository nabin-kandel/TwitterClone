import { useState } from "react";
import axios from "axios";
const UserTweet = () => {
    let [tweetContent, setTweetContent] = useState("");

    const upload = async () => {
        await axios.post("https://react-workshop.fly.dev", {
            authorname: 'Sanchit Poudel',
            content: tweetContent,
            avatar: "https://sanchitpoudel.com.np/assets/logo.jpeg",
            date: '2023',
            image: 'https://sanchitpoudel.com.np/assets/logo.jpeg',
        })
    }
    const handleSubmit = () => {
        upload();
    }


    return (

        <>
            <div className="tweet-box">
                <textarea placeholder="What's on your mind?" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Tweet</button>
            </div>
        </>
    );
};

export default UserTweet;