// PROFILE_SECTION
export const updateFirstname = (fname) => ({ type: "UPDATE_FIRSTNAME", payload: fname });
export const updateLastname = (lname) => ({ type: "UPDATE_LASTNAME", payload: lname });
export const updatePhone = (phone) => ({ type: "UPDATE_PHONE", payload: phone });
export const updateAddress = (address) => ({ type: "UPDATE_ADDRESS", payload: address });

// EDUCATION_SECTION
export const updateCoursename = (courseName) => ({ type: "UPDATE_COURSENAME", payload: courseName });
export const updateCompletionYear = (completionYear) => ({ type: "UPDATE_COMPLETIONYEAR", payload: completionYear });
export const updateCollege = (college) => ({ type: "UPDATE_COLLEGE", payload: college });
export const updatePercentage = (percentage) => ({ type: "UPDATE_PERCENTAGE", payload: percentage });

// SKILLS_SECTION
export const updateSkills = (skill) => ({ type: "ADD_SKILL", payload: skill });

// MINIPROJECT_SECTION
export const updateProjectname = (projectName) => ({ type: "PROJECT_NAME", payload: projectName });
export const updateTechstack = (techStack) => ({ type: "TECH_STACK", payload: techStack });
export const updateDescription = (description) => ({ type: "DESCRIPTION", payload: description });

// SOCIAL_SECTION
export const updateSocial = (Social) => ({ type: "ADD_SOCIAL_LINKS", payload: Social });