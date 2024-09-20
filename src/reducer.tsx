export interface State {
    count: number;
    error: string | null;
}

export interface Action {
    type: "increment" | "decrement";
    payload: number | null
}

export const  reducer = (state: State, action: Action) => {
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