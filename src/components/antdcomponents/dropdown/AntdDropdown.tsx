import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

const AntdDropdown = (props: any) => {
  const { category } = props
  const items: MenuProps['items'] = category.map((data: any, index: any) => ({
    key: index,
    label: data,
  }))
  return (
    <div >
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Category
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default AntdDropdown
