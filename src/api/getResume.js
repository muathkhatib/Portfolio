import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getResume = async () => {
  const ref = await collection(db, 'resume');
  const { docs } = await getDocs(ref);
  return docs[0].data();
};

export default getResume;
