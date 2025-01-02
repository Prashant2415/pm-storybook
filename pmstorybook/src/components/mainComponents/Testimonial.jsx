import React, { useState } from 'react'
import { Para, Title } from '../commonComponents/Common'
import "./MainContent.css"
const Testimonial = () => {
    const personDetails = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Prashant Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Sonu Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Sunita Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jenny Mendhe",
            title: "Senior Software Engineer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]

    const [current, setCurrent] = useState(0);

    const handlePrevious =() =>{
        console.log(current)
        if(current <= 0 || current == undefined || current == null)
        {
            setCurrent(personDetails.length - 1);
        }
        else{
            setCurrent(current-1);
        }
    }
    const handleNext = ()=>{
        if(current >= personDetails.length -1 )
        {
            setCurrent(0);
        }
        else{

            setCurrent(current+1);
        }
    }
    return (
        <div className='testimonial-container'>
            <h1 className='title'>Testinomial</h1>
            <div className="testimonial-content">
                <img className='profile-image' src={personDetails[current].img} alt={personDetails[current].name} />
                <Para className="p-tag" paraText={personDetails[current].name} />
                <Para className="p-tag header-title" paraText={personDetails[current].title} />
                <Para className="p-tag" paraText={personDetails[current].description} />
                <div className="button-container">
                    <button class="previous" id="previous" onClick={handlePrevious}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle previous-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </button>
                    <button class="next" id="next" onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle next-arrow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
