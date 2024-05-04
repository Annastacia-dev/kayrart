import useFetchArts from '../data/art';
import Loader from './Loader';
import Art from './Art';

const Gallery = () => {
  const { loading, arts } = useFetchArts();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lg:px-20 lg:py-12 px-8 py-5 flex flex-col gap-10">
      <h1 className="font-ojuju font-bold capitalize text-3xl bg-primary w-44 px-3 py-1">
        art gallery
      </h1>
      <p className="leading-7 lg:w-3/4">
        Immerse yourself in a gallery of breathtaking illustrations inspired by
        Kayra&apos;s dynamic hairstyles. Each piece tells a story, reflecting
        the fusion of beauty, fahion and artistic expression.
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">
        {arts.slice(0, 8).map((art) => {
          return <Art key={art.id} art={art} />;
        })}
      </div>
      <button className="bg-primary font-bold w-40 px-4 py-2 rounded">
        <a href="art_gallery">View All</a>
      </button>
    </div>
  );
};

export default Gallery;
