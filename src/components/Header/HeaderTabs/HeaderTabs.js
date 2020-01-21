import React from 'react'
import { Menu } from 'antd';

export const HeaderTabs = (props) => {
    return (
        <Menu mode='horizontal' selectedKeys={['1']}>
            <Menu.Item key="1" >
                Overview
            </Menu.Item>
        </Menu>
    )
}
