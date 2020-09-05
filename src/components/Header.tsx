import React, { FC } from 'react'

import { Layout } from 'antd'

const { Header } = Layout

const HeaderWrapper: FC = () => {
  return (
    <Header>
      <div className='header'>Movie searcher</div>
    </Header>
  )
}

export default HeaderWrapper
