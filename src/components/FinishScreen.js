import React from "react";
import RestartButton from "./RestartButton.js";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage < 100 && percentage >= 90) emoji = "🥈";
    if (percentage < 90 && percentage >= 80) emoji = "🥉";
    if (percentage < 80 && percentage >= 0) emoji = "😞";

    return (
        <>
            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
                {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">(Highscore: {highscore} points)</p>

            <RestartButton dispatch={dispatch} />
        </>
    );
}

export default FinishScreen;
