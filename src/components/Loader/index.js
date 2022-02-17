import Loader from 'react-spinners/BeatLoader';

const Spinner = ({ loading }) => {
  return <Loader color={'rgb(97, 219, 251)'} loading={loading} size={100} />;
};

export default Spinner;
