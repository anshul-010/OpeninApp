import React from 'react'
import "../Styles/Table.css"
import { TableRows } from './TableRows'
export const Table = () => {
    let data = [
        {sno:"01",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
        {sno:"02",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
        {sno:"03",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
        {sno:"04",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
        {sno:"05",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
        {sno:"06",links:"www.google.com",prefix:"prefixSample",tag:"tag1"},
    ]
  return (
    <div id='table-container' style={{ overflowX: 'auto' }}>
        <div className='top-head'>
            <p style={{width:"50px"}}>S No.</p>
            <p>Links</p>
            <p>Prefix</p>
            <p>Add Tags</p>
            <p style={{width:"250px"}}>Selected Tag</p>
        </div>
        <div>
            {data?.map((ele,i)=><TableRows ele={ele} i={i} />)}
        </div>
        
    </div>
  )
}
