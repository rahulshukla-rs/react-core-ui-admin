import React from 'react'
import { 
    Route,
    Redirect
} from "react-router-dom";

import { getJwtToken } from './LocalStorage';

export default function PrivateRoute({ children, ...rest }) {
    return(
        <Route {...rest}  >{getJwtToken() ? children : <Redirect to="login" />}</Route>
    );
}
