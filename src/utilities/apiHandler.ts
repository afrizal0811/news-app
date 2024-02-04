import axios from 'axios'

export const getApi = async (URL: string) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}
