import React, { useEffect, useState } from 'react'

const SingleTweet = () => {
    const [tweet, setTweet] = useState(null);
    const fetchTweet = async () => {
        const resp = await axios.get('https://react-workshop-todo.fly.dev/posts/645739147213f63d4355ab0f', {
            headers: {
                apikey: '645739147213f63d4355ab0f'
            }
        });
        setTweet(resp.data)
    }
    useEffect(() => {
        fetchTweet();
    }, []);
    return (
        <>
            {
                tweet ? <Tweet name={user.fullname} username={'@' + user.name} time={date} tweet={content} image={image} avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} key={user.id} /> : null
            }
        </>
    )
}

export default SingleTweet