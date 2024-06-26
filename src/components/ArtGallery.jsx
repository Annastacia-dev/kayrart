import { useState } from 'react';
import useFetchArts from '../data/art';
import Loader from './Loader';
import Art from './Art';
import Pagination from './Pagination';

const ArtGallery = () => {
  const { loading, arts } = useFetchArts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = arts.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lg:px-5 lg:py-10 px-5 py-5">
      <a className="font-bold underline" href="/">
        {'<-'}Back home
      </a>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="font-ojuju font-bold capitalize text-3xl bg-primary w-44 px-3 py-1">
          art gallery
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">
          {arts.map((art) => {
            return <Art key={art.id} art={art} />;
          })}
        </div>
        <Pagination totalItems={totalItems } itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ArtGallery;
