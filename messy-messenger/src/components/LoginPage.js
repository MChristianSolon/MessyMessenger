import React, { useState, useEffect } from 'react';
import { auth, uiConfig } from '../Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Chat from './Chat';

function LoginPage() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user.displayName);
      console.log('You are logged in:', user.displayName);
    } else {
      console.log('error no logged in');
    }
  });
  return (
    <div>
      {currentUser ? (
        <Chat user={currentUser} />
      ) : (
        <>
          <h1 style={{ textAlign: 'center', margin: '35vh' }}>
            MessyMessenger
          </h1>
          <StyledFirebaseAuth
            class="login-authentication"
            uiConfig={uiConfig}
            firebaseAuth={auth}
          ></StyledFirebaseAuth>
        </>
      )}
    </div>
  );
}

export default LoginPage;
