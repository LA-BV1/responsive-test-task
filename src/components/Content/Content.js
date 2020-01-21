import React from 'react'
import './Content.css'
import { AppDashboard } from '../Dashboard/Dashboard'
import { Switch, Route } from "react-router-dom";

export const AppContent = (props) => {
    return (
        <div className='app-main-content'>
            <Switch>
                <Route exact path='/'>
                    <AppDashboard />
                </Route>
                <Route path='/chat'>
                    <div>There is chat</div>
                </Route>
                <Route path='/messages'>
                    <div>There are messages</div>
                </Route>
                <Route path='/files'>
                    <div>There are files</div>
                </Route>
                <Route path='/setting'>
                    <div>There are settings</div>
                </Route>
            </Switch>

        </div>
    )
}