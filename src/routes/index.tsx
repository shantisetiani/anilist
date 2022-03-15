import { Routes, Route } from "react-router-dom";
import HomeContainer from "pages/Home";
import MediaListContainer from "pages/MediaList";
import MediaDetailContainer from "pages/MediaDetail";

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
    element: <HomeContainer />,
  },
  {
    path: ROUTES.MEDIA_LIST,
    key: "mediaList",
    element: <MediaListContainer />,
    name: "Media List",
  },
  {
    path: ROUTES.MEDIA_DETAIL,
    key: "mediaDetail",
    element: <MediaDetailContainer />,
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
