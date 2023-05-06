import { useEffect, useState } from "react";
import LikeButton from "./likeButton";
import UnLikeButton from "./UnlikeButton";
const Footer = () => {
    const [isLiked, setIsLiked] = useState(false);
    const toggle = () => {
        setIsLiked(isLiked => !isLiked);
    }
    useEffect(() => {
        console.log("Hello ");
    }, [])
    return (<div className="tweet-footer">
        <button className="btn-reply">Reply</button>
        <button className="btn-retweet">Retweet</button>
        {isLiked ? (
            <UnLikeButton toggle={toggle} />

        ) :
            (
                <LikeButton toggle={toggle} />
            )
        }
        <button className="btn-share">Share</button>
    </div>);
};
export default Footer;