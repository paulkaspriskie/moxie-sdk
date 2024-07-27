import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from './router/Router.js';
import store from './store/store.js';
import '../scss/index.scss';
document.title = 'Paul Kaspriskie | Frontend Developer';


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={ROUTER} />
  </Provider>
);

