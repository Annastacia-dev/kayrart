/* eslint-disable react/prop-types */
import { extractTwitterUsername } from '../utils/extractName';

const Art = ({ art }) => {
  return (
    <div className="art relative">
      <img src={art?.image} className="rounded-md" />
      <div className="art-details absolute bg-black/80 h-full top-0 w-full justify-center items-center hidden">
        <p className="font-bold text-primary">
          Art by
          <a
            href={art?.twitterLink}
            target="_blank"
            className="hover:underline hover:font-bold cursor-pointer ml-1"
          >
            @{extractTwitterUsername(art?.twitterLink)}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Art;
