import React, {useRef, useState} from "react";
import ResumeContext from "./ResumeContext";

const ResumeState = (props) => {

  
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  
  const resumeRef = useRef();

const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
const [activeColor, setActiveColor] = useState(colors[0]);
const [resumeInformation, setResumeInformation] = useState({
  [sections.basicInfo]: {
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: [],
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: "",
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: "",
  },
});

    return (
        <ResumeContext.Provider value={{sections, setActiveColor,setResumeInformation, resumeRef, resumeInformation, activeColor} }>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeState;