import React from 'react'
import './Header.css'
import { Avatar, Button } from 'antd'

import { HeaderTabs } from './HeaderTabs/HeaderTabs.js'

export const AppHeader = (props) => {
    return (
        <div className='app-header'>
            <Avatar style={{ backgroundColor: '#0077FF' }} />
            <HeaderTabs />
            <Button type='primary'>Premium</Button>
        </div>
    )
}