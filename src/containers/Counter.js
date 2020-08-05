import React, { useRef } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

const Counter = (props) => {

  return (
      <div>
          <CounterOutput value={props.ctr} />
          <CounterControl label="Increment" clicked={props.onIncrementCounter} />
          <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
          <CounterControl label="Add 5" clicked={props.onAddCounter}  />
          <CounterControl label="Subtract 5" clicked={props.onSubstractCounter}  />
          <hr />
          <button onClick={props.onStoreResult}>Store Result</button>
          <ul>
            {
              props.storedResults.map((res, i) => {
                return (
                  <li key={i} onClick={props.onDeleteResult}>
                    {res}
                  </li>
                )
              })
            }
          </ul>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.counter,
    storedResults: state.counter.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD', val: 10}),
    onSubstractCounter: () => dispatch({type: 'SUBSTRACT', val: 15}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
