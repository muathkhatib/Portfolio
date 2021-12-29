import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getDetails = async () => {
  const ref = await collection(db, 'details');
  const { docs } = await getDocs(ref);
  return docs[0].data();
};

export default getDetails;
