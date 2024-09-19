import { useReducer } from "react";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "increment" | "decrement";
    payload: number | null
}

const reducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case "increment": {
            const newCount = payload == null ? state.count + 1 : state.count + payload;
            const hasError = newCount > 12;
            return {
                ...state,
                count: newCount,
                error : hasError ? "Reached max count" : null
            }
        }
        case "decrement": {
            const newCount = payload == null ? state.count - 1 : state.count - payload;
            const hasError = newCount < 0;
            return {
                ...state,
                count: newCount,
                error : hasError ? "Reached min count" : null
            }
        }
        default:
            return state;
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

    return (
        <Container className="mt-5">
            <Card className="col-3">
                <Card.Body>
                    <h1>Count</h1>
                    <hr />
                    <h1>{state.count}</h1>
                    {state.error && <p className="text-danger">{state.error}</p>}
                    <hr />
                    <ButtonGroup>
                        <Button onClick={() => dispatch({ type: "increment", payload: 1 })}>Add</Button>
                        <Button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Deduct</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default App;