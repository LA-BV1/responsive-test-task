import React from 'react'
import './Dashboard.css'
import { data } from '../../utils/initial_data'

import { Progress } from 'antd';
import { DashboardCharts } from './DashboardCharts'
import { DashboardTable } from './DashboardTable';

export const AppDashboard = (props) => {
    return (
        <div className='app-dashboard'>
            <div className='dashboard-header'>
                Data overview
                <div className='dashboard-progress'>
                    <Progress percent={70} showInfo={false} strokeWidth={5} />
                    <span>{data.general.insertionsCount}<span className='dashboard-progress-descr'>insertions needed to complete</span></span>
                </div>
            </div>
            <div className='dashboard-content'>
                <DashboardCharts data={data} />
                <DashboardTable data={data} />
            </div>
        </div>
    )
}