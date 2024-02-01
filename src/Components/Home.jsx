import React, { useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import "../Styles/Home.css"
import { Table } from './Table';

export const Home = () => {

  const [upload, setUpload] = useState(false)
  const [state, setState] = useState(false)

  function handleUpload(){
    setState(true)
    setTimeout(()=>{
      setUpload(true)
      setState(false)
    },1500)
  }

  return (
    <div>
      <div className='main-sheet'>
        <div className='inner-sheet'>
          <div className='excel-img'>
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>
          <p>Drop your excel sheet here or browser</p>
        </div>
          <div className='upload-btn' onClick={handleUpload}>
          <MdOutlineFileUpload/>
          {state?(<p>Uploading...</p>):(<p>Upload</p>)}
          </div>
      </div>
      {upload && <Table/>}
    </div>
  )
}
