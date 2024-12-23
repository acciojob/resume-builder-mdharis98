import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProfileSection from './profileSection'
import EducationSection from './educationSection'
import Skills from './skills'
import MiniProject from './miniProject'
import Social from './social'
import FinalOutput from './finalOutput'

const ResumeRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/miniproject" element={<MiniProject />} />
          <Route path="/social" element={<Social />} />
          <Route path="/final_output" element={<FinalOutput />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default ResumeRouter