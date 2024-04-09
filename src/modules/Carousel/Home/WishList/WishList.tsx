import Carousel from "@/components/Carousel";
import { getWishlist } from "@/services/firebase";

export async function WishListCarousel() {
  const contents = await getWishlist();
  return (
    <>
      <Carousel content={contents} contentType="wishList" title="Em breve" />
      {/* <Carousel content={movies} contentType="serie" title="Bem avaliados" /> */}
    </>
  );
}
