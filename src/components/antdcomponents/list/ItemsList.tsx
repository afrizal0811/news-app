import { List } from 'antd'
import { emptyImage } from '../../../constants/urls'
import './style.css'
const ItemsList = (props: any) => {
  const { item } = props

  return (
    <a
      href={item.href}
      target='_blank'
      rel='noreferrer'
    >
      <List.Item
        className='list-item news-link'
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
          title={item.title}
          description={`${item.date} | ${item.author}`}
        />
        {item.description}
      </List.Item>
    </a>
  )
}

export default ItemsList
