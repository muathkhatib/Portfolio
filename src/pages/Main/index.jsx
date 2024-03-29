import { useSelector } from 'react-redux';
import { LoadingSpiner } from '../../common';
import * as components from '../../components';

const Main = () => {
  const data = useSelector((state) => state.detailsReducer);
  return data.fullName ? (
    <>
      <components.Navbar />
      <components.Header />
      <components.History />
      <components.Skills />
      <components.Works />
      <components.ContactMe />
      <components.Footer />
    </>
  ) : <LoadingSpiner />;
};
export default Main;
