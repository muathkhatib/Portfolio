import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getEducation = async () => {
  const ref = await collection(db, 'education');
  const { docs } = await getDocs(ref);
  return docs[0].data().educationList.reverse();
};

export default getEducation;
