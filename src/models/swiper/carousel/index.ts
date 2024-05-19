import { ContentCarouselProps } from '@models/content'

export type CarouselProps = {
  title: string
  contentType: 'movie' | 'serie' | 'wishList'
  content: ContentCarouselProps[]
}
