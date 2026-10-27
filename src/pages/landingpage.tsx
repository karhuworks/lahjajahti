import { gameText } from "../text";

export function LandingPage({ onStart }: { onStart: () => void }) {
    return (
        <div className="esittelyteksti">
            <h1>{gameText.name}</h1>
            <p>{gameText.description}</p>
            <p className="ohje">{gameText.f11}</p>
            <button onClick={onStart}>{gameText.start}</button>
        </div>
    );
}