import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import AuthProvider from './provider/AuthProvider';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </HelmetProvider>
  </AuthProvider>

)
