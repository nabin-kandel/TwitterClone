
import Tweet from '../components/Tweet';
import axios from 'axios';
import '../App.css'
import { useEffect, useState } from 'react';
import UserTweet from '../components/UserTweet';
import NavBar from '../components/NavBar';
const Home = () => {
  const [users, setUser] = useState([]);

  // const users = [
  //   {
  //     name: "sanchit",
  //     username: "@sanchit",
  //     time: "7 hrs",
  //     tweet: 'Siuuuuuu',
  //     image: 'https://sanchitpoudel.com.np/assets/logo.jpeg'
  //   },
  //   {
  //     name: "Cristiano Ronaldo",
  //     username: "@cr7",
  //     time: '8 hrs',
  //     tweet: 'Siuuuu',
  //     image: 'https://i.pinimg.com/564x/bf/77/95/bf7795a3b833665de79b77469e7a592f.jpg'
  //   },
  // ]
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
      headers: {
        apikey: '6457383b7213f63d43544ac0'
      }
    });
    console.log(posts.data)
    setUser(posts.data);
  };
  useEffect(() => {
    fetchTweets();
 }, [shouldRefresh]);
  return (
   <a> <>
      <UserTweet setShouldRefresh={setShouldRefresh} />
      {users.map(({ user, date, content, image, _id }) => {
        return <Tweet  name={user.fullname} username={'@' + user.name} time={date} tweet={content} image={image} avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} key={user.id} />
      }
      )}
    </>
    </a>
  );
};

export default Home;