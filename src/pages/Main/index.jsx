import { useSelector } from 'react-redux';
import { LoadingSpiner } from '../../common';
import * as components from '../../components';

const Main = () => {
  const data = useSelector((state) => state.detailsReducer);

  return data.length > 0 ? (
    <>
      <components.Navbar />
      <components.Header />
      <components.History />
    </>
  ) : <LoadingSpiner />;
};
export default Main;
