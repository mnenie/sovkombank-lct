import { ACCOUNT_ROUTE, AUTH_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Account from "../views/Account";
import Auth from "../views/Auth";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }, 
  {
    path: '*', 
    Component: NotFound
  }
]

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: ACCOUNT_ROUTE,
    Componet: Account
  },
  {
    path: '*', 
    Component: NotFound
  }
]