import { useState } from 'react';
import { auth, provider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';
import {Link, NavLink} from 'react-router-dom'



function Header() {
    const [isAuth, setIsAuth ]= useState(JSON.parse(localStorage.getItem("isAuth")) || false);

    function handleLogin(){
        signInWithPopup(auth, provider)
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
    }

    function handleLogout() {
        signOut(auth)
        setIsAuth(false)
        localStorage.setItem("isAuth", false)
        window.location.reload()
    }

    return (
        <header>
            <Link to="/" className='logo' style={{color: "black"}}>WriteNode</Link>

            <nav className='nav'>
                <NavLink to="/" className="links">Home</NavLink>
                {
                    isAuth ? (
                        <>
                            <NavLink to="create" className="links">Create</NavLink>
                            <button onClick={handleLogout} className='btn'><i className="bi bi-box-arrow-right"></i> Logout</button>
                        </>
                    ) : (<button onClick={handleLogin} className='btn'><i className="bi bi-google"></i> Login</button>)
                }
                
            </nav>
        </header>
    )
}

export default Header
