import React, { useState } from 'react'
import {    ButtonOne, Para, Title } from '../commonComponents/Common';
import "./MainContent.css"
const TextGenerator = () => {
    const data = [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 2,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 4,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
    ];

    const [currentItem, setCurrentItem] = useState(0);
    
    const handleGenerateText =()=>{
        const randomNum = Math.floor(Math.random() * data.length);
        setCurrentItem(randomNum);
    }

  return (
    <div className='text-generator-component'>
        <Title title="Text Generator"/>
        <ButtonOne buttonTitle="Generate Text" handleClick={handleGenerateText}/>
        <Para paraText={data[currentItem].text}/>
    </div>
  )
}

export default TextGenerator
