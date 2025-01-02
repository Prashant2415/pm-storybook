import "./common.css"
export const Heading =({heading})=>{
    return(
        <h1 className="heading">{heading}</h1>
    )
}

export const Title =({title})=>{
    return(
        <h1 className="heading">{title}</h1>
    )
}

export const ButtonOne =({buttonTitle, handleClick})=>{
    return(
        <button className="button-one" onClick={handleClick}>{buttonTitle}</button>
    )
}

export const Para = ({paraText, className})=>{
    return(
        <p className={`para ${className}`}>{paraText}</p>
    )
}