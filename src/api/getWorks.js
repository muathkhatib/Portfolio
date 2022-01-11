import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getWroks = async () => {
  const ref = await collection(db, 'works');
  const { docs } = await getDocs(ref);
  return docs[0].data().worksList.reverse();
};

export default getWroks;
