import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getExperience = async () => {
  const ref = await collection(db, 'experience');
  const { docs } = await getDocs(ref);
  return docs[0].data().experienceList.reverse();
};

export default getExperience;
