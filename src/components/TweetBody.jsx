const TweetBody = ({ tweet, image }) => {
    return (
        <>
            <p className="tweet-text">{tweet}</p>
            <img
                className="tweet-image"
                src={image}
                alt="Tweet Image"
                style={{ width: "70%" }}
            />
        </>
    );
};

export default TweetBody;