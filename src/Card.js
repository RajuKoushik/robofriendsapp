import React from 'react'


const Card = (props) => {

    const link = props.id


    return (<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={"https://robohash.org/" + link + "?size=200x200"} alt={''}></img>
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>

        </div>
    </div>);
}

export default Card;