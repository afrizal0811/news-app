import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/urls'
import { getApi } from '../utilities/apiHandler'
import ListMenu from '../components/list/ListMenu'
const Menu = () => {
  const [articles, setArticles] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(
        `${baseUrl}/top-headlines?q=apple&from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      setArticles(response.articles)
    }
    fetchData()
  }, [])
  console.log(articles)
  return (
    <div>
      <ListMenu articles={articles} />
    </div>
  )
}

export default Menu
