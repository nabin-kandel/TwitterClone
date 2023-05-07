import { useState } from "react";
import axios from "axios";
const UserTweet = ({ setShouldRefresh }) => {
    let [tweetContent, setTweetContent] = useState("");
    console.log(tweetContent);
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts", {
                content: tweetContent,
                // image: 'https://nabinkdl.com/assets/img/perfil2.jpeg',
            }, {
                headers: {
                    apikey: '645739147213f63d4355ab0f'
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            console.log(e);
            alert('Error');
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