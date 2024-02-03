import { List } from 'antd'
import { emptyImage } from '../../../constants/urls'
import './style.css'
const ItemsList = (props: any) => {
  const { item } = props

  return (
    <List.Item
      className='list-item'
      key={item.title}
      extra={
        <img
          width={item.image ? 250 : 200}
          alt='logo'
          src={item.image ? item.image : emptyImage}
        />
      }
    >
      <List.Item.Meta
        title={<a href={item.href}>{item.title}</a>}
        description={`${item.date} | ${item.author}`}
      />
      {item.description}
    </List.Item>
  )
}

export default ItemsList
