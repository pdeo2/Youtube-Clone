import './App.css';
import { Provider } from 'react-redux';
import Header from './Header';
import Body from './Body';
import store from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';
import CommentSection from './CommentSection';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
  <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
 
export default App;
