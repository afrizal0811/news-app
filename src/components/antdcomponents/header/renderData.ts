import type { MenuProps } from 'antd'
import { category } from '../../../constants/options'

export const items: any = (setKey: any) => [
  {
    label: 'All News',
    key: 'everything',
    onClick: (e: any) => setKey(e.key),
  },
  {
    label: 'Top Headlines',
    key: 'top-headlines',
    onClick: (e: any) => setKey(e.key),
  },
  {
    label: 'Category',
    key: 'category',
    children: category,
  },
]
