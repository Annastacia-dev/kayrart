import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import SubmitArt from './components/SubmitArt.jsx';
import ArtGallery from './components/ArtGallery.jsx';
import SketchesGallery from './components/SketchesGallery.jsx';
import Admin from './components/Admin.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'submit_art',
    element: <SubmitArt />,
  },
  {
    path: 'art_gallery',
    element: <ArtGallery />,
  },
  {
    path: 'sketches',
    element: <SketchesGallery />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
