// import { category } from '../../../constants/options'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
export const items = (setNewsType: Dispatch<SetStateAction<string>>) => [
  {
    label: 'All News',
    key: 'everything',
    onClick: (e: any) => setNewsType(e.key),
  },
  {
    label: 'Top Headlines',
    key: 'top-headlines',
    onClick: (e: any) => setNewsType(e.key),
  },
  //   {
  //     label: 'Category',
  //     key: 'category',
  //     children: category,
  //   },
]
