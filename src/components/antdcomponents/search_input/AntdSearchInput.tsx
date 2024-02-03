import { Input } from 'antd'

const { Search } = Input

const AntdSearchInput = () => {
  return (
    <Search
      placeholder='Cari Berita'
      loading
      enterButton
      style={{ width: '300px' }}
    />
  )
}

export default AntdSearchInput
