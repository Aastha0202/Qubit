import { React, useEffect, useState } from 'react'
import "./feed.css"
import Post from "../Post/Post"
import Share from '../Share/Share'
import { Posts } from '../../dummyData'
import axios from "axios";
const Feed = (props) => {
   
  const {College_id} = props;
 
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    
    const fetchPosts = async () => {
  
      const res = (College_id
        ? await axios.get("/post/profile/"+College_id) 
        : await axios.get("/post/timeline/61e7f9f472fc88e10483f085"));

      setPosts(res.data)
    };
    fetchPosts();
  }, []);
  return (
     <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>

    </div>
  )
}
export default Feed;



// code is for /post 

//   useEffect(() => {
//     let url = "/post/";
//     url += College_id
//         ? "profile/" + College_id
//         : "timeline/61e7f9f472fc88e10483f085";
//       console.log(url);
//     const fetchPosts = () => {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 setPosts(data);
//             })
//             .catch(console.log);
//     };

//     fetchPosts();
// }, []);
