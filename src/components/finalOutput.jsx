import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import Social from './social'

const FinalOutput = () => {
    const { fname, lname, phone, address } = useSelector((state) => state.profile)
    const { courseName, completionYear, collage, percentage } = useSelector((state) => state.education)
    const { skill } = useSelector((state) => state.skills)
    const { projectName, techStack, description } = useSelector((state) => state.miniproject)
    const { Social } = useSelector((state) => state.social)


    return (
        <>
            <p>All steps completed, your resume is ready</p>
            <p>RESET EDIT</p>
            <button>RESET</button>
            <Link to="/">
                <button>EDIT</button>
            </Link>
            <button>DOWNLOAD/PREVIEW</button>
            <div className="profile">
                <h1>{fname} {lname}</h1><br />

                <p>Address: {address}</p>
                <p>Phone Number: {phone}</p>
            </div><br />

            <div className="education">
                <h2>{collage}</h2>
                <p>Graduation Year: {completionYear} </p>
                <p>Course: {courseName}</p>
                <p>Percentage: {percentage} </p>
            </div><br />

            <div className="skills">
                <p>Skills: {skill}</p>
            </div><br />

            <div className="miniProject">
                <h2>{projectName}</h2>
                <p>Description {description}</p>
                <p>Tech Stack:{techStack} </p>
            </div><br />

            <div className="social">
                <ul>
                    <li>{Social}</li>
                </ul>
            </div>
        </>
    )
}

export default FinalOutput