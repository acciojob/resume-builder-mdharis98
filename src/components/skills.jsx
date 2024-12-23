import React from 'react'
import './resumeBuilder.css'
import Navbar from './navbar'
import { Link } from 'react-router'
import { updateSkills } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const Skills = () => {

  const { skill } = useSelector((state) => state.skills)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />

      <div className="profile_section">

        <p className="profileTitle">Add your skills</p>

        <form className="proflie_Form">

          <div className="ph_add" id="inputFields">
            <input
              type="text"
              name="skill"
              placeholder='Skills *'
              required
              value={skill}
              onChange={(e) => dispatch(updateSkills(e.target.value))} />
          </div>

          <div className="btns">
            <div id="delete_skill">DELETE</div>
            <div id="add_skill">ADD SKILLS</div>
          </div>
        </form>
      </div>

      <div className="buttons">
        <Link to="/education">
          <button id="back" className="back">BACK</button>
        </Link>

        <Link to="/miniproject">
          <button id="next">NEXT</button>
        </Link>
        <Link to="/final_output">
          <button id="save_continue">SAVE AND CONTINUE</button>
        </Link>
      </div>
    </>
  )
}

export default Skills