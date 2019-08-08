import React from 'react';

const LoginPage = () => {
    return ( 
        <form>
            <label>Login: <input type="text"/></label>
            <label>Hasło: <input type="password"/></label>
            <button>Zaloguj</button>
        </form>
     );
}
 
export default LoginPage;