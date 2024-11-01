import react,{ useState } from 'react'
import Header from "./Header.jsx";
import About from "./About.jsx";
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
function App(){
    return(
      <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    )
}
export default App;
