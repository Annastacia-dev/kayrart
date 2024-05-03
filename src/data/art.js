import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const useFetchApprovedArts = () => {
  const [arts, setArts] = useState([]);
  const [sketches, setSketches] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApprovedArts = async () => {
      try {
        setLoading(true);
        const artsRef = collection(db, 'arts');
        const approvedArtsQuery = query(artsRef, where('approved', '==', true), where('type', '==', 'not_sketch'));
        const approvedArtsSnapshot = await getDocs(approvedArtsQuery);
        const approvedArtsList = approvedArtsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArts(approvedArtsList);

        const sketchesRef = collection(db, 'arts');
        const approvedSketchesQuery = query(sketchesRef, where('approved', '==', true), where('type', '==', 'sketch'));
        const approvedSketchesSnapshot = await getDocs(approvedSketchesQuery);
        const approvedSketchesList = approvedSketchesSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSketches(approvedSketchesList);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApprovedArts();
  }, []);

  return { arts, loading };
};

export default useFetchApprovedArts;
