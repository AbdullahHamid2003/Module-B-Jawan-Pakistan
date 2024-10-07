import {Routes, Route} from 'react-router-dom'
import Post from "./mainPages/posts";
import SinglePost from "./mainPages/singlePost";

export default function Main(){
    return(
        <>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="singlePost/:id" element={<SinglePost />} />
        </Routes>
        </>
    )
}