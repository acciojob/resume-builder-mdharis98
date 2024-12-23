import React from 'react'
import './resumeBuilder.css'
import Navbar from './navbar'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateSocial } from './actions'

const Social = () => {
  const { Social } = useSelector((state) => state.social)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />

      <div className="profile_section">
        <p className="profileTitle">Add social links like LinkedIn, GitHub, etc.</p>

        <form className="proflie_Form">

          <div className="ph_add" id="inputFields">
            <input
              type="text"
              name="Social"
              placeholder='Social *'
              required
              value={Social}
              onChange={(e) => dispatch(updateSocial(e.target.value))} />
          </div>

          <div className="btns">
            <div id="delete">DELETE</div>
            <div id="add_social">ADD SOCIAL</div>
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

export default Social