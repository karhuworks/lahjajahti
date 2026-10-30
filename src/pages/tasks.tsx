
import { AnswerBox } from "../assets/components.tsx";
import { tasktexts } from "../assets/text.ts";
import './tasks.css';

interface TaskProps {
    solved: boolean;
    onSolve: (taskNumber: number) => void;
}

export function Task1({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task1">
                <h1>Task 1</h1>
                <p>{tasktexts[1].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[1].answer}
                    onSuccess={() => onSolve(1)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task2({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task2">
                <h1>Task 2</h1>
                <p>{tasktexts[2].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[2].answer}
                    onSuccess={() => onSolve(2)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task3({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task3">
                <h1>Task 3</h1>
                <p>{tasktexts[3].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[3].answer}
                    onSuccess={() => onSolve(3)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task4({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task4">
                <h1>Task 4</h1>
                <p>{tasktexts[4].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[4].answer}
                    onSuccess={() => onSolve(4)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task5({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task5">
                <h1>Task 5</h1>
                <p>{tasktexts[5].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[5].answer}
                    onSuccess={() => onSolve(5)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task6({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task6">
                <h1>Task 6</h1>
                <p>{tasktexts[6].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[6].answer}
                    onSuccess={() => onSolve(6)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task7({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task7">
                <h1>Task 7</h1>
                <p>{tasktexts[7].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[7].answer}
                    onSuccess={() => onSolve(7)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task8({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task8">
                <h1>Task 8</h1>
                <p>{tasktexts[8].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[8].answer}
                    onSuccess={() => onSolve(8)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}

export function Task9({ solved, onSolve }: TaskProps) {
    if (!solved) {
        return (
            <div className="task" id="task9">
                <h1>Task 9</h1>
                <p>{tasktexts[9].question}</p>
                <AnswerBox
                    correctanswer={tasktexts[9].answer}
                    onSuccess={() => onSolve(9)}
                />
            </div>
        );
    } else {
        return <div className="solved"></div>;
    }
}
