import useFetchArts from '../data/art';
import Loader from './Loader';
import Art from './Art';

const Sketches = () => {
  const { loading, sketches } = useFetchArts();

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="lg:px-20 lg:py-12 px-8 py-5 flex flex-col gap-10">
      <h1 className="font-ojuju font-bold capitalize text-3xl bg-primary w-40 px-5 py-1">
        sketches
      </h1>
      <p className="leading-7 lg:w-3/4">No colors, just amazing art.</p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">
        {sketches.map((sketch) => {
          return <Art key={sketch.id} art={sketch} />;
        })}
      </div>
    </div>
  );
};

export default Sketches;
