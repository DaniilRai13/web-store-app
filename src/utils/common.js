export const buildUrl = (url, params) => {
  let newUrl = url;
  Object.entries(params).forEach(([key, value], i) => {
    const sign = i === 0 ? '?' : '&'
    newUrl += `${sign}${key}=${value}`
  })
  return newUrl
}

export function sumBy(arr) {
  return arr.reduce((a, b) => a + b, 0)
}