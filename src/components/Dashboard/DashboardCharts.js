import React from 'react'
import { Row, Col } from 'antd';
import chart1 from '../../assets/images/graph-1.svg'
import chart2 from '../../assets/images/group-2.svg'
import round1 from '../../assets/images/pie-chart.svg'
import round2 from '../../assets/images/pie-chart-2.svg'

export const DashboardCharts = (props) => {
    const { charts, terms } = props.data
    return (
        <div className='dashboard-charts'>
            <Row gutter={1}>
                <Col sm={24} md={12} xl={10} xxl={10}>
                    <div>General Results</div>
                    <div className='chart-block'>
                        <div className='general-chart-block'>
                            <span><span>{charts.general.followersCount}</span> Followers</span>
                            <img src={chart1} alt='general-chart' />
                        </div>
                        <div className='round-chart-block'>
                            <img src={round1} alt='general-chart-round' />
                        </div>
                    </div>
                </Col>
                <Col sm={24} md={12} xl={10} xxl={10}>
                    Ratings by category
                    <div className='chart-block'>
                        <div className='general-chart-block'>
                            <span><span>{charts.ratingsByCategory.followersCount}</span> Followers</span>
                            <img src={chart2} alt='general-chart' />
                        </div>
                        <div className='round-chart-block'>
                            <img src={round2} alt='general-chart-round' />
                        </div>
                    </div>
                </Col>
                <Col sm={24} md={12} xl={4} xxl={4}>
                    <div className='term-block'>
                        {terms.map((item, index) => {
                            return (
                                <div key={index}>
                                    {`TERM ${index + 1}`} <span>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}