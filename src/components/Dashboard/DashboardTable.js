import React, { useState, useEffect } from 'react'
import { Button, Table } from 'antd';
import { additionalData } from '../../utils/additional_data'

export const DashboardTable = (props) => {
    const [rows, setRows] = useState([])
    const [range, setRange] = useState(null)
    const { supportRequests } = props.data

    useEffect(() => {
        setRows(supportRequests.map(el => { el.id = Math.floor(Math.random() * Date.now()); return el }))
        handlePaginationRange(1, 6)
    }, [])


    const addRows = () => {
        let randomItem = additionalData.supportRequests[Math.floor(Math.random() * additionalData.supportRequests.length)]
        randomItem = { ...randomItem, id: Math.floor(Math.random() * Date.now()) }
        setRows([...rows, randomItem])
    }

    const changeRows = (record) => {
        let newArray = rows
        let index = newArray.findIndex(el => el.id === record.id)
        newArray[index].status = 'sent'
        setRows([...newArray])
    }

    const handlePaginationRange = (page, pageSize) => {
        setRange(page * 6)
    }

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            render: text => <span className='table-user'>{text}</span>,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'time',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: text => <span>{new Date(text).toLocaleTimeString()}</span>,
        },
        {
            title: 'phone number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'city',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => text === 'sent' ? <Button type='primary'>Sent</Button> : <Button onClick={() => changeRows(record)}>Send</Button>,
        },
    ]

    return (
        <div className='dashboard-table-container'>
            <div className='dashboard-table-header'>Support Request
                <div>
                    <Button type="link" size={"large"} onClick={addRows}>
                        ADD
                    </Button>
                </div>
            </div>
            <Table
                scroll={{ x: true }}
                columns={columns}
                dataSource={rows}
                pagination={{
                    hideOnSinglePage: true,
                    pageSize: 6,
                    onChange: (page, pageSize) => handlePaginationRange(page, pageSize)
                }}
                rowKey={record => Math.floor(Math.random() * 9999)}
            />
            <div className='pagination-range-info'>
                Showing <span>{range - 5}</span> to <span>{range > rows.length ? range - (range - rows.length) : range}</span> of {rows.length} elements.
            </div>
        </div>
    )
}