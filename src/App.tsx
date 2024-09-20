import { useReducer } from "react";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import {reducer, State} from "./reducer"


const App = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0, error: null } as State);

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