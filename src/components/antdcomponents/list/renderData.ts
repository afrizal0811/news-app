import moment from 'moment'
import { DATE_FULL_FORMAT_WITHSPACE } from '../../../constants/formats'

export const getListData = (articles: any) => {
  const data = Array.from({ length: articles.length }).map((_, i) => ({
    href: articles[i].url,
    title: articles[i].title,
    author: articles[i].author,
    date: moment(articles[i].publishedAt).format(DATE_FULL_FORMAT_WITHSPACE),
    description: articles[i].description,
    image: articles[i].urlToImage,
  }))
  return data
}
