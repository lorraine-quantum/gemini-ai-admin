import { Admin, Resource, Login, EditGuesser } from "react-admin";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./user";
import { defaultTheme } from "react-admin";
import red from '@mui/material/colors/grey'
import green from '@mui/material/colors/green'

import { TransactionList, TransactionEdit } from './transaction'
import { WithdrawalList, WithdrawalEdit } from './withdrawal'
const baseUrl = 'https://api.geminiaitrades.com';
// const baseUrl = 'http://localhost:3000';
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url, options = {}) => {
  options.user = {
    authenticated: true,
    // use the token from local storage
    token: localStorage.getItem('username')
  };
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(baseUrl, fetchJson);
import UserIcon from "@mui/icons-material/PeopleOutline";
import TransactionIcon from "@mui/icons-material/AccountBalanceWallet";
import WithdrawalIcon from "@mui/icons-material/AccountBalance";
// import TransactionIcon from "@mui/icons-material/AccountBalanceWallet";
const myTheme = {
  ...defaultTheme, palette: {
    primary: { main: red[500] },
    secondary: { main: '#00695c' }
  }
}
import { AppBar, Layout, Logout, UserMenu } from 'react-admin';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const MyLogoutButton = props => <Logout {...props} icon={<ExitToAppIcon />} />;

const MyUserMenu = () => <UserMenu><MyLogoutButton /></UserMenu>;

const MyAppBar = () => <AppBar userMenu={<MyUserMenu />} />;
import * as React from 'react';
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Report';
import History from '@mui/icons-material/History';
import { Title, useTranslate } from 'react-admin';
import { useLocation } from 'react-router-dom';

const MyErr = ({
  error,
  resetErrorBoundary,
  ...rest
}) => {
  const { pathname } = useLocation();
  const originalPathname = useRef(pathname);

  // Effect that resets the error state whenever the location changes
  useEffect(() => {
    if (pathname !== originalPathname.current) {
      resetErrorBoundary();
    }
  }, [pathname, resetErrorBoundary]);

  const translate = useTranslate();
  return (
    <div>
      <Title title="Error" />
      <h1><ErrorIcon /> oops </h1>
      {/* <div>A client error occurred and your request couldn't be completed.</div> */}
      {process.env.NODE_ENV !== 'production' && (
        <details>
          <h2>{translate(error.toString())}</h2>
          {errorInfo.componentStack}
        </details>
      )}
      <div>
        <Button
          variant="contained"
          startIcon={<History />}
          onClick={() => history.go(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

const MyLayout = (props) => <Layout {...props} error={MyErr} />;

const myLoginPage = () => {
  < Login backgroundImage=" https://source.unsplash.com/random/1600x900/daily" />
}
const App = () => (
  <Admin theme={myTheme} layout={MyLayout} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} recordRepresentation="name" />
    <Resource name="transactions" list={TransactionList} icon={TransactionIcon} edit={TransactionEdit} />
    <Resource name="withdrawals" list={WithdrawalList} icon={WithdrawalIcon} edit={WithdrawalEdit} />
  </Admin >
);

export default App;