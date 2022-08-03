import { useNavigate } from "react-router-dom"


const DashBoard = () => {
  let navigate = useNavigate()
  let data = {
    'name': "hello there your are logged out"
  }
    return (
    <>
    <h1>DashBoard Page</h1>
     <button onClick={()=>{
        navigate("/logout",{state:data})
     }}>Logout</button>
    </>
  )
}

export default DashBoard