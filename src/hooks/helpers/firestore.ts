import { firestore } from "@/firebase/clienApp";
import { collection, getDocs, query } from "firebase/firestore";

export const getMySnippets = async (userId: string) => {
  const snippetQuery = query(
    collection(firestore, `users/${userId}/communitySnippets`)
  );

  const snippetDocs = await getDocs(snippetQuery);
  return snippetDocs.docs.map((doc) => ({ ...doc.data() }));
};
