import { List } from 'antd'
import { emptyImage } from '../../constants/urls'
const ItemsList = (props: any) => {
  const { item } = props

  return (
    <List.Item
      key={item.title}
      extra={
        <img
          width={250}
          alt='logo'
          src={item.image ? item.image : emptyImage}
        />
      }
    >
      <List.Item.Meta
        title={<a href={item.href}>{item.title}</a>}
        description={`${item.author} | ${item.date}`}
      />
      {item.description}
    </List.Item>
  )
}

export default ItemsList
