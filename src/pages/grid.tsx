import './grid.css';
import { task1, task2, task3, task4, task5, task6, task7, task8, task9 } from './tasks';

export function Grid() {
    return (
        <div className="grid">
            <div className="box">{task1()}</div>
            <div className="box">{task2()}</div>
            <div className="box">{task3()}</div>
            <div className="box">{task4()}</div>
            <div className="box">{task5()}</div>
            <div className="box">{task6()}</div>
            <div className="box">{task7()}</div>
            <div className="box">{task8()}</div>
            <div className="box">{task9()}</div>
        </div>
    );
}