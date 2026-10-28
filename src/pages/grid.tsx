import './grid.css';
import { Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8, Task9 } from './tasks';

export function Grid() {

    return (
        <div className="grid">
            <div className="box">{Task1()}</div>
            <div className="box">{Task2()}</div>
            <div className="box">{Task3()}</div>
            <div className="box">{Task4()}</div>
            <div className="box">{Task5()}</div>
            <div className="box">{Task6()}</div>
            <div className="box">{Task7()}</div>
            <div className="box">{Task8()}</div>
            <div className="box">{Task9()}</div>
        </div>
    );
}
