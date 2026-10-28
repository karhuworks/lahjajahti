import { AnswerBox, CheckAnswer } from "../assets/components.tsx";
import { tasktexts } from "../assets/text.ts";
import { useState } from "react";
import './tasks.css';

export function Task1() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task1">
                <h1>Task 1</h1>
                <p>{tasktexts[1].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[1].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task2() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task2">
                <h1>Task 2</h1>
                <p>{tasktexts[2].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[2].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task3() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task3">
                <h1>Task 3</h1>
                <p>{tasktexts[3].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[3].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task4() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task4">
                <h1>Task 4</h1>
                <p>{tasktexts[4].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[4].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task5() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task5">
                <h1>Task 5</h1>
                <p>{tasktexts[5].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[5].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task6() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task6">
                <h1>Task 6</h1>
                <p>{tasktexts[6].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[6].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task7() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task7">
                <h1>Task 7</h1>
                <p>{tasktexts[7].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[7].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task8() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task8">
                <h1>Task 8</h1>
                <p>{tasktexts[8].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[8].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task9() {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task9">
                <h1>Task 9</h1>
                <p>{tasktexts[9].question}</p>
                <AnswerBox onSubmit={(userAnswer) => { 
                    setSolved(CheckAnswer(userAnswer, tasktexts[9].answer));
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}