import { Layout, Menu } from 'antd'
import AntdSearchInput from '../search_input/AntdSearchInput'
import { items } from './renderData'
const AntdHeader = (props: any) => {
  const { Header } = Layout
  const { setNewsType } = props
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
          items={items(setNewsType)}
          defaultSelectedKeys={['everything']}
          style={{ flex: 1, minWidth: 0 }}
        />
        <AntdSearchInput {...props} />
      </Header>
    </Layout>
  )
}

export default AntdHeader
