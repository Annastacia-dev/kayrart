import { FiLoader } from 'react-icons/fi';

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <FiLoader className="animate-spin w-16 h-16 text-primary" />
    </div>
  );
};

export default Loader;
