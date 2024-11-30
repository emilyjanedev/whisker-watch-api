import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const uploadImage = async (fileData) => {
  const storage = getStorage();
  const uniqueId = uuidv4();
  const storageRef = ref(
    storage,
    `pet-images/${fileData.originalname + "-" + uniqueId}`
  );
  const metadata = { contentType: fileData.mimetype };
  const snapshot = await uploadBytesResumable(
    storageRef,
    fileData.buffer,
    metadata
  );
  const downloadURL = await getDownloadURL(snapshot.ref);
  console.log("File succesfully uploaded.");

  return downloadURL;
};

export { uploadImage };
