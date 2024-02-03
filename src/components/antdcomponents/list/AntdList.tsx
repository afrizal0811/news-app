import { List } from 'antd'
import ItemsList from './ItemsList'
import { getListData } from './renderData'
const AntdList = (props: any) => {
  const { articles } = props

  return (
    <div className='m-4'>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          align: 'center',
          position: 'both',
          pageSize: 10,
        }}
        dataSource={getListData(articles)}
        renderItem={(item) => <ItemsList item={item} />}
      />
    </div>
  )
}

export default AntdList
