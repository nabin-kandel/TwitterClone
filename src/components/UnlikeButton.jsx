import { useEffect } from "react";
const UnLikeButton = ({ toggle }) => {
    useEffect(() => {
        return () => {
            console.log('Unlike Component unmounted');
        }

    }, []);

    return (
        <button className="btn-like" onClick={toggle} >UnLike</button>
    )

}
export default UnLikeButton;