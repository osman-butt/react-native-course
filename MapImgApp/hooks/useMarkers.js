import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { database } from "../firebase";

export const useMarkers = () => {
  const [values] = useCollection(collection(database, "location"));
  return values?.docs.map(doc => ({ ...doc.data(), id: doc.id })) || [];
};
