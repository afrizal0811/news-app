import { Input } from 'antd'

const AntdSearchInput = ({ setSearchText }: any) => {
  const { Search } = Input

  return (
    <Search
      placeholder='Cari Berita'
      enterButton
      style={{ width: '300px' }}
      onSearch={(e) => setSearchText(e)}
    />
  )
}

export default AntdSearchInput
