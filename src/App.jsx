import React from 'react';
import { useToast } from './useToast';

const App = () => {
  const showToast = useToast();

  const handleClick = (elem) => {
    let message, status;

    switch (elem) {
      case 'login':
        message = 'Login Successfully';
        status = 'success';
        break;
      case 'signUp':
        message = 'Sign Up Successfully';
        status = 'success';
        break;
      case 'error':
        message = 'An Error Occurred';
        status = 'error';
        break;
        case 'warning':
        message = 'An warning Occurred';
        status = 'warning';
        break;
      default:
        message = 'Unknown action';
        status = 'info';
    }

    showToast({ message, status });
  };

  return (
    <div className='custom_hook_notify'>
      <button onClick={() => handleClick('login')}>Login</button>
      <button onClick={() => handleClick('signUp')}>SignUp</button>
      <button onClick={() => handleClick('error')}>Error</button>
      <button onClick={() => handleClick('warning')}>warning</button>
    </div>
  );
};

export default App;
