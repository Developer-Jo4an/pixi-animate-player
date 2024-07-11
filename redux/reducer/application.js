import Builder from "../../utils/redux/builder";
import {states} from "../../constants/appContent";

const builder = new Builder({
  name: "app",
  initialState: {
    state: "pixiAnimatePlayer",
    previousStates: []
  },
  reducers: {
    requestState: (state, {payload}) => {
      if (states[state.state].availableStates.includes(payload)) {
        state.previousStates.push(state.state);
        state.state = payload;
      }
    },
    requestPreviousState: (state) => {
      if (!state.previousStates.length) return;
      state.state = state.previousStates.splice(-1, 1)[0];
    }
  }
});

const app = builder.create().export();

export const {useApp} = app.selectors;

export default app;
