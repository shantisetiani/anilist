import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import MediaList from "pages/MediaList";
import MediaDetail from "pages/MediaDetail";

const SITE_URL = process.env.PUBLIC_URL;

export const ROUTES = {
  HOME: `${SITE_URL}/`,
  MEDIA_LIST: `${SITE_URL}/media-list`,
  MEDIA_DETAIL: `${SITE_URL}/media-detail`,
};

export const ROUTE_CONFIG = [
  {
    path: ROUTES.HOME,
    key: "home",
    element: <Home />,
  },
  {
    path: ROUTES.MEDIA_LIST,
    key: "mediaList",
    element: <MediaList />,
    name: "Media List",
  },
  {
    path: ROUTES.MEDIA_DETAIL,
    key: "mediaDetail",
    element: <MediaDetail />,
  },
];

interface RouteConfig {
  path: string;
  key: string;
  element: JSX.Element;
}

export const RenderRouter = () => (
  <Routes>
    {ROUTE_CONFIG.map((route: RouteConfig) => {
      return <Route {...route} />;
    })}
    <Route
      path="*"
      element={<h1 className="text-center py-44">Page Not Found!</h1>}
    />
  </Routes>
);

export default RenderRouter;
