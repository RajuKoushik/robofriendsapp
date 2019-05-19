import React from 'react'


const Card = (props) => {

    const link = props.id


    return (<div className='bg-light-blue pa3 ma2 br3 dib grow bw2 shadow-5 tc'>
        <img src={"https://robohash.org/" + link + "?size=200x200"} alt={''}></img>
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>

        </div>
    </div>);
}

export default Card;