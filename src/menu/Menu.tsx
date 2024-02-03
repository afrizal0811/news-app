import React, { useEffect, useState } from 'react'
import AntdList from '../components/antdcomponents/list/AntdList'
import Loader from '../components/loader/Loader'
import { baseUrl } from '../constants/urls'
import { getApi } from '../utilities/apiHandler'
import './style.css'

const Menu = () => {
  const [loading, setLoading] = useState<any>(true)
  const [articles, setArticles] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(
        `${baseUrl}/top-headlines?q=apple&from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      setLoading(false)
      setArticles(response.articles)
    }
    fetchData()
  }, [])
  const renderLoading = <Loader />
  const renderArticle = <AntdList articles={articles} />

  // console.log(articles)
  return (
    <div className='menu-container'>
      {loading ? renderLoading : renderArticle}
    </div>
  )
}

export default Menu
