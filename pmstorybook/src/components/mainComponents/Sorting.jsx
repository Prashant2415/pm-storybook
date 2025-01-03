import React, { useState } from 'react'
import "./MainContent.css"
const Sorting = () => {
    const [personDetails, setPersonDetails] = useState([
        {
            id: 1,
            name: "Prashant Mendhe",
            age: 25
        },
        {
            id: 2,
            name: "Sonu Mendhe",
            age: 20
        },
        {
            id: 3,
            name: "Raju Mendhe",
            age: 21
        },
        {
            id: 4,
            name: "Kaju Mendhe",
            age: 18
        },
    ])

    const [option, setOption] = useState("");

    const handleOptionInput = (event) => {
        console.log("inside")
        var item = event.target.value;
        console.log(item)
        setOption(item)
        const sort = personDetails.sort((a, b) => {
            if (item === "Sort by Name Ascending")
                return a.name.localeCompare(b.name);
            if (item === "Sort by Name Descending") {
                return b.name.localeCompare(a.name);
            }
            if (item === "Sort by Age Ascending") {
                return a.age - b.age;
            }
            if (item === "Sort by Age Descending") {
                return b.age - a.age;
            }
            return 0;
        })
        setPersonDetails(sort);
    }

    return (
        <div className='sorting-container'>
            <div className="sorting">
                <select value={option} onChange={handleOptionInput}>
                    <option value="Sort by Name Ascending">Sort by Name Ascending</option>
                    <option value="Sort by Name Descending">Sort by Name Descending</option>
                    <option value="Sort by Age Ascending">Sort by Age Ascending</option>
                    <option value="Sort by Age Descending">Sort by Age Descending</option>
                </select>
            </div>
            <div className="card-container">
                {personDetails.map((p, index) => {
                    return (
                        <div className="details" key={index}>
                            <p className='name'>{p.name}</p>
                            <p className='age'>{p.age}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sorting
