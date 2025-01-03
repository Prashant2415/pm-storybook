import React, { useEffect, useState } from 'react'

const Filter = () => {
    const fruits = ["Apple", "Mango", "Orange", "Pineapple"];
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const handleSearchInput =(event)=>{
        setFlag(true);
        setSearch(event.target.value);
        console.log(event.target.value)
        if(event.target.value === "" || event.target.value === "undefined" || event.target.value === "null")
        {
            setFlag(false);
        }
        else{
            setData(fruits.filter((item)=> item.toLowerCase().includes(search.toLowerCase())))
        }
        
    }
  return (
    <div className='filter-container'>
      <div className="fiter-main-container">
        <label className=''>Filter By</label><br />
        <input className='input-field' name='search' value={search} type="text" onChange={handleSearchInput} />
        <br />
      </div>
      <div className="filter-content">
        {
            flag === true ? (
                <>
                    {data.map((d,index)=>{
                        return(
                            <p className='p-content' key={index}>{d}</p>
                        )
                    })}
                </>
            ) :(
                <>
                {fruits.map((f,index)=>{
                    return(
                        <p className='p-content' key={index}>{f}</p>
                    )
                })}</>
            )
        }
      </div>
    </div>
  )
}

export default Filter
