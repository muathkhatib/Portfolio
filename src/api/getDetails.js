import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase.config';

const getDetails = async () => {
  const ref = await collection(db, 'details');
  const { docs } = await getDocs(ref);

  return {
    'Full Name': docs[0].data()['Full Name'],
    'Date Of Birth': docs[0].data()['Date Of Birth'],
    Nationality: docs[0].data().Nationality,
    'Work Status': docs[0].data()['Work Status'],
    Freelancer: docs[0].data().Freelancer,
    Phone: docs[0].data().Phone,
    Email: docs[0].data().Email,
    Address: docs[0].data().Address,
  };
};

export default getDetails;
