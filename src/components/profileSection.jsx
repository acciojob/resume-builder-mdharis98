import React from 'react'
import './resumeBuilder.css'
import Navbar from './navbar'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateAddress, updateFirstname, updateLastname, updatePhone } from './actions'

const ProfileSection = () => {

  const { fname, lname, phone, address } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  return (
    <>

      <Navbar />

      <div className="profile_section">

        <p className="profileTitle">Add your profile details</p>

        <form className="proflie_Form">
          <div className="names" id="inputFields">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={fname} // Bind to state
              onChange={(e) => dispatch(updateFirstname(e.target.value))}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={lname} // Bind to state
              onChange={(e) => dispatch(updateLastname(e.target.value))}
            />          </div>

          <div className="ph_add" id="inputFields">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={phone} // Bind to state
              onChange={(e) => dispatch(updatePhone(e.target.value))}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address} // Bind to state
              onChange={(e) => dispatch(updateAddress(e.target.value))}
            />
          </div>

          <div className="file" id="inputFields">
            <label htmlFor="profile">Profile Iamge</label>
            <input type="file" name="url" placeholder='Upload Profile Picture' id='profile' />
          </div>
        </form>

      </div>
      <div className="buttons">
        <button id="back">BACK</button>

        <Link to="/education">
          <button id="next">NEXT</button>
        </Link>
        <Link to="/final_output">
          <button id="save_continue">SAVE AND CONTINUE</button>
        </Link>
      </div>
    </>
  )
}

export default ProfileSection