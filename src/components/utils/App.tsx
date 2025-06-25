import "./App.css";
import Layout from "../layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../layouts/About";
import Work from "../layouts/Work";
import Contact from "../layouts/Contact";
import Article from "../layouts/Article";
import Post from "../layouts/Post";

const routeList = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Work",
    element: <Work />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Article",
    element: <Article />,
  },
  {
    path: "/Post", // ✅ 추가
    element: <Post />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    if (item.path === "/") return item;
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
    };
  })
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
