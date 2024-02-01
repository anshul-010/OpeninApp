import React from 'react';
import '../Styles/Sidebar.css';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrSchedule } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='cross-btn'>
            <button className="toggle-button" onClick={toggleSidebar}>
             X
            </button>
        </div>
        <div>
            <h2>Base</h2>
        </div>
            <div className='side-list'>
                <p><RxDashboard  /><span>dashboard</span></p>
                <p><AiOutlineCloudUpload  /><span>Upload</span></p>
                <p><FaFileInvoice  /><span>Invoice</span></p>
                <p><AiOutlineSchedule  /><span>Schedule</span></p>
                <p><GrSchedule  /><span>Calendar</span></p>
                <p><MdNotificationsActive /><span>Notification</span></p>
                <p><CiSettings  /><span>Setting</span></p>
            </div>
      </div>
    );
  };

 
