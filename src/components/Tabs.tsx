import React, { FC } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs
interface Props {
  changeSelectedTab: (key: string) => void
}
const TabsWrapper: FC<Props> = ({ changeSelectedTab }) => {
  return (
    <Tabs defaultActiveKey='1' onChange={changeSelectedTab}>
      <TabPane tab=' Movies' key='1' />
      <TabPane tab='Actors' key='2' />
    </Tabs>
  )
}

export default TabsWrapper
