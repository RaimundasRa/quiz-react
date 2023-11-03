function RestartButton({ dispatch }) {
    return (
        <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "restart" })}
        >
            Go again
        </button>
    );
}

export default RestartButton;
