import { List } from 'antd'
import { getListData } from './renderData'
import ItemsList from './ItemsList'
const ListMenu = (props: any) => {
  const { articles } = props

  return (
    <List
      itemLayout='vertical'
      size='large'
      pagination={{
        align: 'center',
        position: 'bottom',
        pageSize: 3,
      }}
      dataSource={getListData(articles)}
      renderItem={(item) => <ItemsList item={item} />}
    />
  )
}

export default ListMenu
