import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase.config';

const getPersonalImage = async () => {
  const check = await collection(db, 'personal_Image');
  const { docs } = await getDocs(check);
  // eslint-disable-next-line no-underscore-dangle
  const { url: { stringValue } } = docs[0]._document.data.value.mapValue.fields;

  return stringValue;
};

export default getPersonalImage;
