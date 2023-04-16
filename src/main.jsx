import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CharacterList from './components/CharacterList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/all",
        element: <CharacterList/>
      },
      {
        path: "/female",
        element: <CharacterList/>
      },
      {
        path: "/male",
        element: <CharacterList/>
      },
      {
        path: "/unknown",
        element: <CharacterList/>
      },
      {
        path: "/alive",
        element: <CharacterList/>
      },
      {
        path: "/dead",
        element: <CharacterList/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
