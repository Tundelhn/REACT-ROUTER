import React from 'react';
import auth from './Auth';
export const AppLayout = props => {
  return (
    <div>
      <h1>This is App Layout</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push('/');
          });
        }}>
        Logout
      </button>
    </div>
  );
};
