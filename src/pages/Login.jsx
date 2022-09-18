import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
const Login = () => {
  const [user, setUser] = useState(null);

  function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' } // customization attributes
    );
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }, [user]);

  const revoke = () =>
    google.accounts.id.revoke(`${user.email}`, (done) => {
      console.log(user.email, 'consent revoked');
      setUser(null);
    });
  console.log(user);
  return (
    <div className="App">
      <div id="signInDiv" className="w-1/6"></div>
      {user && <button onClick={revoke}>sign out</button>}
    </div>
  );
};

export default Login;
