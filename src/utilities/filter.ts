interface ResponseInf {
  author: string
  description: string
  content: string
  url: string
}

export const filterResponses = (response: ResponseInf) => {
  return (
    response.author !== null ||
    response.description === '[Removed]' ||
    response.content === '[Removed]' ||
    response.url === 'https://removed.com'
  )
}
