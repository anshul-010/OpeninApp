import React, { useEffect, useState } from "react";
import "../Styles/Table.css";

export const TableRows = ({ ele }, { i }) => {

  const [tags, setTags] = useState([])
  function handleTag(e){
    const newTag = e.target.value;
    let flag = tags.find((ele)=>ele==newTag)
    if(!flag){
      setTags([...tags,newTag])
    }
  }

  function handleDelete(tag){
    const updatedTags = tags.filter((ele) => ele !== tag);
    setTags(updatedTags);
    console.log(updatedTags);
  }

  useEffect(()=>{

  },[tags])

  return (
    <div>
      <div className="lists" key={i}>
        <p style={{width:"50px"}}>{ele.sno}</p>
        <p className="t-links">{ele.links}</p>
        <p>{ele.prefix}</p>
        <p >
          <select name="" onChange={handleTag} id="select-tag">
            <option value="">select Tag</option>
            <option value="tag1">tag1</option>
            <option value="tag2">tag2</option>
            <option value="tag3">tag3</option>
            <option value="tag4">tag4</option>
          </select>
        </p>
        <p className="tag-list" style={{width:"250px"}}>
          {tags?.map((ele)=><p onClick={()=>handleDelete(ele)}>{ele} ×</p>)}
        </p>
      </div>
    </div>
  );
};
