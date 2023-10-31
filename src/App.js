import { useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import { useReducer } from "react";

const initialState = {
    questions: [],

    // 'loading', 'error', 'ready', 'finished'
    status: "loading",
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                question: action.payload,
                status: "ready",
            };
        case "dataFailed":
            return {
                ...state,
                status: "error",
            };
        default:
            throw new Error("Action unknown");
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((err) => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <div>
            <div className="app">
                <Header />
                <Main>
                    <p>1/15</p>
                    <p>Question</p>
                </Main>
            </div>
        </div>
    );
}
