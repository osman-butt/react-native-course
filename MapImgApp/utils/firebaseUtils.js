import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { database, storage } from "../firebase";

export const saveLocation = async (locationData, imageUri, imageName) => {
  if (imageUri) {
    const image = await fetch(imageUri);
    const imageBlob = await image.blob();
    const storageRef = ref(storage, `images/${imageName}`);
    await uploadBytes(storageRef, imageBlob);
  }

  await addDoc(collection(database, "location"), locationData);
};

export const fetchImages = async imageNames => {
  const urls = await Promise.all(
    imageNames.map(async name => {
      const url = await getDownloadURL(ref(storage, `images/${name}`));
      return url;
    })
  );
  return urls;
};
