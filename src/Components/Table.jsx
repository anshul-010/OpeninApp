import React from 'react'
import "../Styles/Table.css"
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
    <div id='table-container'>
        <div className='top-head'>
            <p>S No.</p>
            <p>Links</p>
            <p>Prefix</p>
            <p>Add Tags</p>
            <p>Selected Tag</p>
        </div>
        <div>
            {data?.map((ele,i)=>{
                return <div className='lists' key={i}>
                    <p>{ele.sno}</p>
                    <p className='t-links'>{ele.links}</p>
                    <p>{ele.prefix}</p>
                    <p>{ele.tag}</p>
                    <p>1</p>
                </div>
            })}
        </div>
        
    </div>
  )
}
