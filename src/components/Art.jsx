/* eslint-disable react/prop-types */
import { extractTwitterUsername } from '../utils/extractName';

const Art = ({ art }) => {
  return (
    <div className=" relative flex flex-col justify-center items-center gap-3">
      <button className='border border-black rounded-full px-3 py-2 lg:w-3/4'>
        <a
          href={art?.twitterLink}
          target="_blank"
          className="hover:underline hover:font-bold cursor-pointer ml-1"
        >
          @{extractTwitterUsername(art?.twitterLink)}
        </a>
      </button>
      <img src={art?.image} className="rounded-md h-full object-cover" loading='lazy' />
    </div>
  );
};

export default Art;
