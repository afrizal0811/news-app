import { Layout, Menu } from 'antd'
import AntdSearchInput from '../search_input/AntdSearchInput'
import { items } from './renderData'
import { useState } from 'react'
const AntdHeader = ({ setSearchText }: any) => {
  const { Header } = Layout
  const [key, setKey] = useState<any>('')
  console.log(key)
  return (
    <Layout>
      <Header
        style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
      >
        <img
          src='./images/logo.png'
          height='50px'
        />
        <Menu
          theme='dark'
          mode='horizontal'
          items={items(setKey)}
          style={{ flex: 1, minWidth: 0 }}
        />
        <AntdSearchInput setSearchText={setSearchText} />
      </Header>
    </Layout>
  )
}

export default AntdHeader
