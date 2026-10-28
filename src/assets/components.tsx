import { useState } from 'react';
import './components.css';

export function AnswerBox({ onSubmit }: { onSubmit: (answer: string) => void }) {
    const [input, setInput] = useState('');

    const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page reload on enter/submit
        if (onSubmit) {
            onSubmit(input);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="answerbox">
            <input 
                type="text" 
                placeholder="Vastaus..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Submit
            </button>
        </form>
    );
}

export function CheckAnswer(userAnswer: string, correctAnswer: string): boolean {
    return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}