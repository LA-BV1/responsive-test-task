import React from 'react'
import './Sidebar.css'
import { Menu } from 'antd'
import { Link } from "react-router-dom";
import dashboardIcon from '../../assets/images/dashboard.svg'
import chatIcon from '../../assets/images/chat.svg'
import folderIcon from '../../assets/images/folder.svg'
import messageIcon from '../../assets/images/message.svg'
import cogIcon from '../../assets/images/cog.svg'

export const AppSidebar = (props) => {
    return (
        <Menu mode="inline" defaultSelectedKeys={['dashboard']} className='app-sidebar'>
            <Menu.Item key="dashboard">
                <Link to='/'><img src={dashboardIcon} alt='dashboard' /></Link>
            </Menu.Item>
            <Menu.Item key="chat">
                <Link to='/chat'><img src={chatIcon} alt='chat' /></Link>
            </Menu.Item>
            <Menu.Item key="folder">
                <Link to='/files'><img src={folderIcon} alt='folder' /></Link>
            </Menu.Item>
            <Menu.Item key="message">
                <Link to='/messages'><img src={messageIcon} alt='message' /></Link>
            </Menu.Item>
            <Menu.Item key="cog">
                <Link to='/setting'><img src={cogIcon} alt='cog' /></Link>
            </Menu.Item>
        </Menu>
    )
}