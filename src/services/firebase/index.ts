import { addDoc, getDocs } from "firebase/firestore";
import * as tmdbServices from "../tmdbApi";
import { wishlistCollection } from "./firebase.config";

export async function getWishlist() {
  const { docs } = await getDocs(wishlistCollection);

  const wishlist = docs.map((doc) => {
    const { id, title, poster, rating } = doc.data();
    return { id, title, poster, rating };
  });

  return wishlist;
}

export async function addToWishlist(
  id: number,
  whoRecommends: unknown,
): Promise<void> {
  try {
    const response = await tmdbServices.fetchMovieById(id);

    await addDoc(wishlistCollection, {
      name: response.title,
      poster: response.poster_path,
      contentType: "Movie",
      whoRecommends,
    });
  } catch (error) {
    throw new Error(
      "Erro ao adicionar na lista de desejo",
      error as ErrorOptions,
    );
  }
}
