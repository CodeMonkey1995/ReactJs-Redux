const initialState = {
  counter: 0,
  results: []
}

export const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  } else if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    }
  } else if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.val
    }
  } else if (action.type === 'SUBSTRACT') {
    return {
      ...state,
      counter: state.counter - action.val
    }
  } else if (action.type === 'STORE_RESULT') {
    return {
      ...state,
      results: state.results.concat(state.counter)
    }
  }
  return state;
};
