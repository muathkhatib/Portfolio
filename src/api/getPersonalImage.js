import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getPersonalImage = async () => {
  const check = await collection(db, 'personal_Image');
  const { docs } = await getDocs(check);

  return docs[0].data().url;
};

export default getPersonalImage;
