import { Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "../pageNotFound/PageNotFound";
import * as Styles from "./style";

import { rootPath, signInPath } from "./paths";
import { getLocalJwt } from "utils/helpers";
import HomePage from "modules/pages/homePage/HomePage";

const notFoundRoute: RouteDefinition = {
  path: "*",
  element: PageNotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: rootPath,
    element: HomePage,
    protected: false,
    title: "Home",
    pathType: 0,
    redirect: signInPath,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

interface RoutesProps {
  children?: React.ReactNode;
  navCollapsed?: string;
}

function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
  if (isLoggedIn === route.protected || !route.redirect) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;
    return { element: <RouteComponent /> };
  } else {
    return { element: <Navigate replace to={route.redirect} /> };
  }
}

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  element?: React.FC;
  routes?: RouteDefinition[];
  title?: string;
  requires?: any;
  pathType?: number;
}

export const RoutesComponent: React.FC<RoutesProps> = (): any => {
  const userLoggedIn = Boolean(getLocalJwt());

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(userLoggedIn, route);
    return <Route key={i} path={route.path} {...render} />;
  };
  return (
    <Styles.MainContainer>
      <Styles.RouteContainer>
        {/* <Navbar /> */}
        <Routes>{routes.map(mapRoutes)}</Routes>
      </Styles.RouteContainer>
    </Styles.MainContainer>
  );
};
