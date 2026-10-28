import './components.css';

export function AnswerBox() {
    return (
        <div className="answerbox">
            <input type="text" placeholder="Vastaus..." />
            <button className="submit-button">Submit</button>
        </div>
    );
}
