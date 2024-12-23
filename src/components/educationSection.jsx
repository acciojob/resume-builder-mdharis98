import React from 'react'
import './resumeBuilder.css'
import Navbar from './navbar'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateCollege, updateCompletionYear, updateCoursename, updatePercentage } from './actions'


const EducationSection = () => {
  const { courseName, completionYear, college, percentage } = useSelector((state) => state.education)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />

      <div className="profile_section">

        <p className="profileTitle">Add your education details</p>

        <form className="proflie_Form">
          <div className="names" id="inputFields">
            <input
              type="text"
              name="courseName"
              placeholder='Course Name *'
              required
              value={courseName}
              onChange={(e) => dispatch(updateCoursename(e.target.value))} />
            <input
              type="number"
              name="completionYear"
              placeholder='Completion Year *'
              required
              value={completionYear}
              onChange={(e) => dispatch(updateCompletionYear(e.target.value))} />
          </div>

          <div className="ph_add" id="inputFields">
            <input
              type="text"
              name="college"
              placeholder='college/School *'
              required
              value={college}
              onChange={(e) => dispatch(updateCollege(e.target.value))} />
            <input
              type="number"
              name="percentage"
              placeholder='Percentage *'
              required
              value={percentage}
              onChange={(e) => dispatch(updatePercentage(e.target.value))} />
          </div>

          <div className="btns">
            <div id="delete">DELETE</div>
            <div id="add_education">ADD EDUCTION</div>
          </div>
        </form>
      </div>

      <div className="buttons">
        <Link to="/">
          <button id="back" className="back">BACK</button>
        </Link>

        <Link to="/skills">
          <button id="next">NEXT</button>
        </Link>
        <Link to="/final_output">
          <button id="save_continue">SAVE AND CONTINUE</button>
        </Link>
      </div>
    </>
  )
}

export default EducationSection