import React from 'react'
import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import educationReducer from './educationReducer'
import skillsReducer from './skillsReducer'
import miniprojectReducer from './miniprojectReducer'
import socialReducer from './socialReducer'

const rootReducer = combineReducers({
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    miniproject: miniprojectReducer,
    social: socialReducer,
})

export default rootReducer