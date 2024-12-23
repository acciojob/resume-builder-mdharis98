import React from 'react'
import './resumeBuilder.css'
import Navbar from './navbar'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateDescription, updateProjectname, updateTechstack } from './actions'

const MiniProject = () => {

  const { projectName, techStack, description } = useSelector((state) => state.miniproject)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />

      <div className="profile_section">
        <p className="profileTitle">Add your Mini Projects</p>

        <form className="proflie_Form">

          <div className="ph_add" id="inputFields">
            <input
              type="text"
              name="projectName"
              placeholder='Project Name *'
              required
              value={projectName}
              onChange={(e) => dispatch(updateProjectname(e.target.value))} />
            <input
              type="text"
              name="techStack"
              placeholder='Tech Stack *'
              required value={techStack}
              onChange={(e) => dispatch(updateTechstack(e.target.value))} />
            <input
              type="text"
              name="description"
              placeholder='Description *'
              required
              value={description}
              onChange={(e) => dispatch(updateDescription(e.target.value))} />
          </div>

          <div className="btns">
            <div id="delete">DELETE</div>
            <div id="add_project">ADD PROJECT</div>
          </div>
        </form>
      </div>

      <div className="buttons">
        <Link to="/skills">
          <button id="back" className="back">BACK</button>
        </Link>

        <Link to="/social">
          <button id="next">NEXT</button>
        </Link>
        <Link to="/final_output">
          <button id="save_continue">SAVE AND CONTINUE</button>
        </Link>
      </div>
    </>
  )
}

export default MiniProject