import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { SignUpPage, SignInPage, SignOutPage,
         PasswordForgetPage } from 'src/components/Login'
import LandingPage from 'src/components/Landing'
import HomePage from 'src/components/Home'
import AccountPage from 'src/components/Account'
import Navigation from 'src/components/Navigation'
import withAuthentication from 'src/components/Session/withAuthentication'

import * as routes from 'src/constants/routes'

const Root = () =>
  <BrowserRouter>
    <div>
      <Navigation /><hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </BrowserRouter>


export default withAuthentication(Root);
