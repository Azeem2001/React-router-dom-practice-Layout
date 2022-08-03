import { Link, NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div>
            <nav>
                {/* <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                </ul> */}
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : '' } }}>Home</NavLink>
                        <NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "Green" : '' } }}>About</NavLink>
                        <NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? "Blue" : '' } }}>Contact</NavLink>
                        <NavLink to="/post/mobile/1" style={({ isActive }) => { return { color: isActive ? "Pink" : '' } }}>Post</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
