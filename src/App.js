import React from "react";
import Header from "./components/header";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import '../src/App.css'
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <Header />
      <ProfileContainer />
      <SkillContainer/>
      <ProjectContainer/>
      <Qualification/>
      <Contact/>
    </div>
  );
}

export default App;
