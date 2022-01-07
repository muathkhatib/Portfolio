import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getSkills = async () => {
  const ref = await collection(db, 'skills');
  const { docs } = await getDocs(ref);
  return docs[0].data().skillsList;
};

export default getSkills;
