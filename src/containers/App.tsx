import React, { useState } from 'react'
import { Layout, Divider } from 'antd'

import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Input from '../components/Input'
import Main from './Main'
const { Content } = Layout

function App() {
  const [selectedTab, setSelectedTab] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const changeSelectedTab = (key: string) => {
    setSelectedTab(Number(key))
  }

  const changeSearchTerm = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <Layout className='layout'>
      <Header />
      <Content className='content'>
        <div className='menu'>
          <Tabs changeSelectedTab={changeSelectedTab} />
          <Input changeSearchTerm={changeSearchTerm} />
        </div>
        <Divider />
        <Main currentTab={selectedTab} searchTerm={searchTerm} />
      </Content>
    </Layout>
  )
}

export default App
