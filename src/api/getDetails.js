import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase.config';

const getDetails = async () => {
  const check = await collection(db, 'details');
  const { docs } = await getDocs(check);
  // eslint-disable-next-line no-underscore-dangle
  const data = docs[0]._document.data.value.mapValue.fields;

  return data;
};

export default getDetails;
