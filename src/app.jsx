import React, {useState, useEffect} from 'react';
import './style.css';
import Die from './components/die';
import {nanoid} from 'nanoid';

export default function App() {
    const [randomNumbers, setRandomNumbers] = useState(randomDiceNumber)
    
    function randomDiceNumber() {
        const randomNumberArray = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 6);
            randomNumberArray.push({
                value: randomNumber,
                isHeld: false,
                id: nanoid()
            });
        };
        return randomNumberArray;
    };
    function handleDice() {
        setRandomNumbers(randomDiceNumber);
    };
    function handleClick(id) {
        setRandomNumbers((oldDice) => {
            oldDice.map((die) => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die
            })
        });
    };
    return (
        <div className="body">
            <main>
                <div className="tiles">
                {randomNumbers.map((element) => {
                    return(
                        <Die key = {element.id} number = {element.value}
                            id = {element.id} isClicked = {handleClick}
                            isHeld = {element.isHeld}
                        />
                    )
                })}
                </div>
                <button className='roll' onClick={handleDice} >Roll Dice</button>
            </main>
        </div>
    );
};