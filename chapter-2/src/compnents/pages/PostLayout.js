import { Outlet } from "react-router-dom"

const PostLayout = () => {
  return (
    <div>
        <h1>PostLayout Page</h1>
        <Outlet/>   
    </div>
  )
}

export default PostLayout