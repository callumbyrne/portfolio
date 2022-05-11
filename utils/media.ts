import { getStrapiURL } from './api'
import { IImage } from '../typeings'

export function getStrapiMedia(media: IImage) {
  const { url } = media.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}
