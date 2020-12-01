import React from 'react';
import { Route } from 'react-router-dom';
import Admin_home_screen from '../admin/Admin_home_screen';
import Admin_login_screen from '../admin/Admin_login_screen';

export default [
    <Route path="/home" component={Admin_home_screen} />,
    <Route path="/login" component={Admin_login_screen} />
];