import { useState } from 'react';
import './grid.css';
import { Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8, Task9 } from './tasks';
import { GiveTip } from '../assets/components';

export function Grid( { onFinish }: { onFinish: () => void } ) {

    const [solvedCount, setSolvedCount] = useState(0);

    const handleTaskSolved = () => {
        setSolvedCount(prev => prev + 1);
    };

    if (solvedCount < 9) {
        return (
            <div className="grid">
                <div className="box"><Task1 onSolve={handleTaskSolved} /></div>   
                <div className="box"><Task2 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task3 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task4 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task5 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task6 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task7 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task8 onSolve={handleTaskSolved} /></div>
                <div className="box"><Task9 onSolve={handleTaskSolved} /></div>
                <button className="skip-button" onClick={() => setSolvedCount(9)}>Skip to final task</button>
                <div><GiveTip/></div>
            </div>
        );
    } else {
        return (
            <div className="finaltask">
                <h1>Here comes the final task!</h1>
                <button className="finaltask-button" onClick={onFinish}>Done</button>
            </div>
        );
    }

}
