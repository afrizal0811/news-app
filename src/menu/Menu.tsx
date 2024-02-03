import { useEffect, useState } from 'react'
import AntdHeader from '../components/antdcomponents/header/AntdHeader'
import AntdList from '../components/antdcomponents/list/AntdList'
import Loader from '../components/loader/Loader'
import { baseUrl } from '../constants/urls'
import { getApi } from '../utilities/apiHandler'
import { filterResponses } from '../utilities/filter'
import './style.css'
const Menu = () => {
  const [loading, setLoading] = useState<any>(true)
  const [articles, setArticles] = useState<any>([])
  const [searchText, setSearchText] = useState<any>('')
  const [newsType, setNewsType] = useState<any>('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(
        `${baseUrl}/everything?q=${searchText}&sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const filteredArticles = response.articles.filter(filterResponses)
      setLoading(false)
      setArticles(filteredArticles)
    }
    fetchData()
  }, [searchText])
  const renderLoading = <Loader />
  const renderArticle = <AntdList articles={articles} />
  
  return (
    <div>
      <AntdHeader
        setSearchText={setSearchText}
        setNewsType={setNewsType}
      />
      <div className='menu-container'>
        {loading ? renderLoading : renderArticle}
      </div>
    </div>
  )
}

export default Menu
