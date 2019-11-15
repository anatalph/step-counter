import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import StepCounter from './StepCounter'
import { ADD_STEP, RESET_STEP } from './Actions'

const initialState = {
  step: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP: {
      return {
        step: state.step + 1
      }
    }
    case RESET_STEP: {
      return {
        step: 0
      }
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <StepCounter />
    </Provider>
  );
}

export default App;
