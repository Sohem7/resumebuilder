import React, { useContext } from "react";
import Editor from "../Editor/Editor";
import styles from "./Body.module.css";
import ResumeContext from "../../context/ResumeContext";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";


function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  const a = useContext(ResumeContext);

  const sections = a.sections;
  const resumeInformation = a.resumeInformation;
  const activeColor=a.activeColor;
  const setActiveColor=a.setActiveColor;
  const setResumeInformation=a.setResumeInformation;
  // const resumeRef=a.resumeRef;

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
      </div>
    </div>
  );
}

export default Body;
