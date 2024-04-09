import { getDocs } from "firebase/firestore";
import { wishlistCollection } from "./firebase.config";

export async function getWishlist() {
  const { docs } = await getDocs(wishlistCollection);

  const wishlist = docs.map((doc) => {
    const { id, title, poster, rating } = doc.data();
    return { id, title, poster, rating };
  });

  return wishlist;
}
