import Carousel from '@components/Carousel'
import { getWishlist } from '@services/firebase'

export async function WishListCarousel() {
  const wishList = await getWishlist()
  return (
    <>
      <Carousel content={wishList} contentType="wishList" title="Em breve" />
    </>
  )
}
