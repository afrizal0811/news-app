// import { category } from '../../../constants/options'

export const items: any = (setNewsType: any) => [
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
