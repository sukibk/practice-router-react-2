import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootPage, {
    loader as rootLoader
} from "./pages/Root";
import HomePage from "./pages/Home";
import BookmarkPage, {
    loader as bookmarkPageLoader
}from "./pages/Bookmark";
import EditBookmark, {
    loader as editBookmarkLoader,
    action as actionEditLoader
} from "./pages/EditBookmark";
import NewBookmark,
{action as newBookmarkAction}
    from "./pages/NewBookmark";


const router = createBrowserRouter(
    [
      {
          path: '',
          element: <RootPage />,
          errorElement: <ErrorPage/>,
          loader: rootLoader,
          children: [
              {
                  index: true,
                  element: <HomePage />
              },
              {
                  path: ':bookmarkId',
                  element: <BookmarkPage/>,
                  loader: bookmarkPageLoader
              },
              {
                  path: ':bookmarkId/edit',
                  element: <EditBookmark />,
                  loader: editBookmarkLoader,
                  action: actionEditLoader
              },
              {
                  path: 'new',
                  element: <NewBookmark />,
                  action: newBookmarkAction
              }
          ]

      }
    ]
);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
