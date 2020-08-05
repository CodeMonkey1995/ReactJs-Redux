import React, { useRef } from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
  const { onSubmit, onLogout } = props;
  const usernameRef = useRef(props.username);
  const passwordRef = useRef(props.password);

  return (
    <div>
      <input type="text" ref={usernameRef} defaultValue={props.username}/>
      <input type="password" ref={passwordRef} defaultValue={props.password}/>
      <button onClick={() => onSubmit(usernameRef.current.value, passwordRef.current.value, true)}>Submit</button>
      <button onClick={() => onLogout(false)}>Logout</button>
      {
        props.status
        ? <p>Hello {props.username}</p>
        : undefined
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password,
    status: state.login.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (username, password, status) => dispatch({
      type: 'LOGIN', username, password, status
    }),
    onLogout: (status) => dispatch({type: 'LOGOUT', status})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
