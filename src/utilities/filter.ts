export const filterResponses = (response: any) => {
  return (
    response.author !== null ||
    response.description === '[Removed]' ||
    response.content === '[Removed]' ||
    response.url === 'https://removed.com'
  )
}
