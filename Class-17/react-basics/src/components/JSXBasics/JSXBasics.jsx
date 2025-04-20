import React from 'react'

const JSXBasics = () => {

    const randomNum = Math.floor(Math.random() * 10 + 1);

    const todos = ["Go to Swimming", "Learn Web", "Learn React"];

    let element = null;

    if (randomNum === 7) {
        element = <p><strong>This is a lucky number</strong></p>
    } else {
        element = <p>Ordinary number</p>
    }


    return (
        <div>
            <h1>JSX Basics</h1>

            <h2>Random Number : {randomNum}</h2>
            {element}
            {randomNum === 7 ? <p><strong>Ternary Opertaor: This is a lucky number</strong></p> : <p>Ternary Operator: Ordinary number</p>}

            {randomNum === 5 && <img src="https://media3.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952zz13yvf8a9d82q1f202ji2ps6h32r8pyiqu4f8s4&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"/>}

            <ul>
                {
                    todos.map((todo)=>{
                        return <li>{ todo }</li>
                    })
               }
            </ul>
        </div>
    )
}

export default JSXBasics
