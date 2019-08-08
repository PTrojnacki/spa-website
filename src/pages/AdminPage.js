import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
    return ( 
        <Route render={() => (
            permission ? (<p>Panel administratora</p>) : (
                <Redirect to="/login" />
            )
        )} />
     );
}
 
export default AdminPage;