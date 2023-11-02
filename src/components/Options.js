function Options({ question }) {
    return (
        <div>
            <div className="options">
                {question.options.map((option, idx) => (
                    <button key={idx} className="btn btn-option">
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Options;
