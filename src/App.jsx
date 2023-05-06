
import Tweet from './components/Tweet';
import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
const App = () => {
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

  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop.fly.dev/");
    console.log(posts.data)
    setUser(posts.data);
  }
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      {users.map(({ authorname, date, tweet, image, avatar }) => {
        return <Tweet name={authorname} username={authorname} time={date} tweet={tweet} image={image} avatar={avatar} key={authorname} />
      }
      )}
    </>
  );
};

export default App;