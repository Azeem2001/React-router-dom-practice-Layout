import { NavLink, Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
           <h1>React Router V6</h1>
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : '' }}}    >Home</NavLink>
                    <NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "Green" : '' } }}>About</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? "Blue" : '' } }}>Contact</NavLink>
                    <NavLink to="/post" style={({ isActive }) => { return { color: isActive ? "Pink" : '' } }}>Post</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout
