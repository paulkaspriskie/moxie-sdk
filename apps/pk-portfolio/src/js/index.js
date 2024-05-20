import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from './router/Router.js';
import '../scss/index.scss';


const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ROUTER} />);

