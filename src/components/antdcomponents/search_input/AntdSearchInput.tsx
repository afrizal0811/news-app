import { Input } from 'antd'
import { HeaderInf } from '../../../constants/type'

const AntdSearchInput = (props: HeaderInf) => {
  const { setSearchText, loading } = props
  const { Search } = Input

  return (
    <Search
      placeholder='Cari Berita'
      loading={loading}
      enterButton
      style={{ width: '300px' }}
      onSearch={(e) => setSearchText(e)}
    />
  )
}

export default AntdSearchInput
