import { Layout, Menu } from 'antd'
import { category } from '../../../constants/options'
import AntdDropdown from '../dropdown/AntdDropdown'
import AntdSearchInput from '../search_input/AntdSearchInput'
const AntdHeader = () => {
  const { Header } = Layout
  const renderMenuItems = (data: any) => {
    return <Menu.Item>{data}</Menu.Item>
  }

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
          style={{ flex: 1, minWidth: 0 }}
        >
          {renderMenuItems('All News')}
          {renderMenuItems('Top Headlines')}
          {renderMenuItems(<AntdDropdown category={category} />)}
        </Menu>
        <AntdSearchInput />
      </Header>
    </Layout>
  )
}

export default AntdHeader
