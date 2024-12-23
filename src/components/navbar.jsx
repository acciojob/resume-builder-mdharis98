import React from 'react'
import './resumeBuilder.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navTop">
                    <h1>RESUME GENERATOR</h1>
                </div>
                <div className="navBottom">
                    <ul className="profile_UL">
                        <li className="profile_Li">Profile Section</li>
                        <li className="profile_Li">Education Section</li>
                        <li className="profile_Li">Skills</li>
                        <li className="profile_Li">Mini Project</li>
                        <li className="profile_Li">Social</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar