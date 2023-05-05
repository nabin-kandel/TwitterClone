const Header = ({ name, username, time }) => {
    return (<div className="tweet-header">
        <h3 className="username">{name}</h3>
        <span className="handle">{username}</span>
        <span className="timestamp">{time}</span>
    </div>
    );
};
export default Header;