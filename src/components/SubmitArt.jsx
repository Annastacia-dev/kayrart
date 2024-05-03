import { useState } from 'react';
import { db } from '../config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';

const SubmitArt = () => {
  const [image, setImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false)
  const [twitterLink, setTwitterLink] = useState('');
  const [type, setType] = useState('not_sketch');

  const handleUpload = async (e) => {
    toast.info('Uploading image');
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'afyanet');

    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dauveffyr/image/upload',
        formData
      );
      toast.success('Image uploaded successfully');
      setImage(res.data.secure_url);
      setImageUploaded(true)
    } catch (err) {
      setImageUploaded(false)
      toast.error(
        'Something went wrong while uploading your image, please try again'
      );
      console.error(err);
    }
  };

  const handleAddArt = async (e) => {
    e.preventDefault();
    if (!image || !twitterLink || !type) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!imageUploaded){
      toast.error("Image not uploaded, please wait for upload to complete or try again if it failed")
    }
    const artsRef = collection(db, 'arts');
    const newArt = {
      image,
      twitterLink,
      type,
      approved: false,
    };
    toast.info('Uploading your art');
    try {
      await addDoc(artsRef, newArt);
      toast.success(
        'Art submitted successfully, it will be displayed once approved'
      );
      setImage(null);
      setTwitterLink('');
      setType('not_sketch');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Failed to submit art, please try again');
    }
  };

  return (
    <div className="lg:px-5 lg:py-20 px-5 py-5 flex flex-col justify-center items-center gap-10">
      <ToastContainer />
      <h1 className="font-ojuju font-bold capitalize text-3xl bg-primary w-72 px-3 py-2">
        submit your kayart
      </h1>
      <form className="flex flex-col lg:w-1/2 gap-10 shadow-lg lg:p-5 p-4">
        <div className="flex flex-col gap-2">
          <label className="font-bold capitalize">upload image</label>
          <input type="file" required onChange={handleUpload} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Twitter Link</label>
          <input
            type="text"
            placeholder="Twitter Link"
            value={twitterLink}
            onChange={(e) => {
              setTwitterLink(e.target.value);
            }}
            className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent"
            required
          />
        </div>
        <div className="mt-2">
          <input
            type="radio"
            name="type"
            id="not_sketch"
            value="not_sketch"
            checked={type === 'not_sketch'}
            onChange={() => {
              setType('not_sketch');
            }}
            className="mr-1"
          />
          <label htmlFor="not_sketch">Not Sketch</label>
          <input
            type="radio"
            name="type"
            id="sketch"
            value="sketch"
            checked={type === 'sketch'}
            onChange={() => setType('sketch')}
            className="ml-4 mr-1"
          />
          <label htmlFor="sketch">Sketch</label>
        </div>
        <button
          onClick={handleAddArt}
          className="mt-4 px-4 py-2 bg-primary text-black font-bold rounded-md hover:bg-black hover:text-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitArt;
