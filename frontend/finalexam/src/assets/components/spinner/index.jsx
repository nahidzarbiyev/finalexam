import React from 'react'
import { Space, Spin } from 'antd';
import './index.scss'
const SpinnerComponent = () => {
  return (
    <div className='spinner'>

<Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
    </div>
  )
}

export default SpinnerComponent