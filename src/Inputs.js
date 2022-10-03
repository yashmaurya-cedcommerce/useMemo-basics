import React from 'react'

export default function Inputs(props) {

    return (<>
        <div className='inputsContainer'>

            <input type="number" className='inputFields' onChange={(event) => props.firstInputHandler(event)} />

            <button className={props.active ? 'addBtnTwo':'addBtnOne'} onClick={(event) => props.addInputs(event)}>+</button>

            <input type="number" className='inputFields' onChange={(event) => props.secondInputHandler(event)} />

            <p className='equals'> = </p>

            {(props.sum !== null) ? <p className='sumDisplay'>{props.sum}</p> : ''}

        </div>

        <p className='productDisplay'>Product is : {props.product}</p>
        <button className='toggleBtn' onClick={(event)=>props.toggleEvent(event)}>Toggle</button>
    </>
    )
}
