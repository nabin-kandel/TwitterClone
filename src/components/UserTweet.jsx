import { useState } from "react";
import axios from "axios";
const UserTweet = ({ setShouldRefresh }) => {
    let [tweetContent, setTweetContent] = useState("");
    console.log(tweetContent);
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts/all", {
                authorname: 'Sanchit Poudel',
                content: tweetContent,
                avatar: "https://sanchitpoudel.com.np/assets/logo.jpeg",
                date: '2023',
                image: 'https://sanchitpoudel.com.np/assets/logo.jpeg',
            }, {
                headers: {
                    apikey: '6457383b7213f63d43544ac0'
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            console.log(e);
        }
    };
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