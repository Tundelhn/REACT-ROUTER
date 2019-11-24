import React from 'react';
import auth from './Auth';

export const LandingPage = props => {
  return (
    <div>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push('/app');
          });
        }}>
        login
      </button>
    </div>
  );
};
