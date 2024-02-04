import { useEffect, useState } from 'react'
import AntdHeader from '../components/antdcomponents/header/AntdHeader'
import AntdList from '../components/antdcomponents/list/AntdList'
import Loader from '../components/loader/Loader'
import { baseUrl } from '../constants/urls'
import { getApi } from '../utilities/apiHandler'
import { filterResponses } from '../utilities/filter'
import './style.css'
const Menu = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [articles, setArticles] = useState<string[]>([])
  const [searchText, setSearchText] = useState<string>('a')
  const [newsType, setNewsType] = useState<string>('everything')
  const search = searchText ? searchText : 'a'

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(
        `${baseUrl}/${newsType}?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const filteredArticles = response.articles.filter(filterResponses)
      setLoading(false)
      setArticles(filteredArticles)
    }
    setLoading(true)
    fetchData()
  }, [newsType, search])

  const renderLoading = <Loader />
  const renderArticle = <AntdList articles={articles} />

  return (
    <div>
      <AntdHeader
        setSearchText={setSearchText}
        setNewsType={setNewsType}
        loading={loading}
      />
      <div className='menu-container'>
        {loading ? renderLoading : renderArticle}
      </div>
    </div>
  )
}

export default Menu
