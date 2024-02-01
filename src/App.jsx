import { useState } from 'react';
import './App.css'
import { Home } from './Components/Home'
import { Sidebar } from './Components/Sidebar'
import { Signup } from './Components/Signup'
import Navbar from './Components/Navbar';

function App() {
  const [signup, setSignup] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
   <>

    {!signup?<Signup setSignup={setSignup}/>:(<div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Home/>
      </div>
    </div>)}
      
   </>
  )
}

export default App
