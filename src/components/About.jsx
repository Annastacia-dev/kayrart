import useFetchArts from '../data/art';
import Loader from './Loader';
import Art from './Art';

const About = () => {
  const { loading, arts, sketches } = useFetchArts();

  const getRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * (items?.length || 0));
    return items ? items[randomIndex] : null;
  };

  const randomArt = getRandomItem(arts);
  const randomSketch = getRandomItem(sketches);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lg:px-20 lg:py-12 px-8 py-5 grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-ojuju font-bold capitalize text-3xl">about muse</h1>
        <p className="leading-7 lg:w-3/4">
          Kayra Theodore is more than just a model; she is a canvas for
          creativity. With her distinctive hairstyles and magnetic presence, she
          has captured the imagination of artists worldwide. Learn more about
          Kayra&apos;s journey and the inspiration behind her extraordinary hair
          transformations.
        </p>
      </div>
      <div className="flex gap-4">
        <Art art={randomArt} />
        <Art art={randomArt} />
      </div>
    </div>
  );
};

export default About;
