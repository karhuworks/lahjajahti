import { AnswerBox } from "../assets/components.tsx";
import { tasktexts } from "../assets/text.ts";
import { useState } from "react";
import './tasks.css';

export function Task1({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task1">
                <h1>Task 1</h1>
                <p>{tasktexts[1].question}</p>
                <AnswerBox correctanswer={tasktexts[1].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task2({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task2">
                <h1>Task 2</h1>
                <p>{tasktexts[2].question}</p>
                <AnswerBox correctanswer={tasktexts[2].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task3({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task3">
                <h1>Task 3</h1>
                <p>{tasktexts[3].question}</p>
                <AnswerBox correctanswer={tasktexts[3].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task4({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task4">
                <h1>Task 4</h1>
                <p>{tasktexts[4].question}</p>
                <AnswerBox correctanswer={tasktexts[4].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task5({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task5">
                <h1>Task 5</h1>
                <p>{tasktexts[5].question}</p>
                <AnswerBox correctanswer={tasktexts[5].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task6({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task6">
                <h1>Task 6</h1>
                <p>{tasktexts[6].question}</p>
                <AnswerBox correctanswer={tasktexts[6].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task7({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task7">
                <h1>Task 7</h1>
                <p>{tasktexts[7].question}</p>
                <AnswerBox correctanswer={tasktexts[7].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task8({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task8">
                <h1>Task 8</h1>
                <p>{tasktexts[8].question}</p>
                <AnswerBox correctanswer={tasktexts[8].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task9({ onSolve }: { onSolve: () => void }) {
    const [solved, setSolved] = useState(false);

    if (!solved) {
        return (
            <div className="task" id="task9">
                <h1>Task 9</h1>
                <p>{tasktexts[9].question}</p>
                <AnswerBox correctanswer={tasktexts[9].answer} onSuccess={() => {
                    setSolved(true);
                    onSolve();
                }} />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}