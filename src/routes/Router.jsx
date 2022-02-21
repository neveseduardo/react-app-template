import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomeLayout from 'layouts/Home/';
import DashboardLayout from 'layouts/Dashboard/';
import AuthLayout from 'layouts/Authentication/';

import PrivateRouter from 'routes/PrivateRouter'
import AuthorizedRouter from 'routes/AuthorizedRouter'

import NotFound from 'views/Errors/NotFound'
import Home from 'views/Home/Home'
import About from 'views/Home/About'
import Dashboard from 'views/Dashboard/Dashboard'
import Login from 'views/Auth/Login'

function Router() {

    const [authenticated, setAuthenticated] = useState(true)

    return (
        <div className="router">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Switch>
                        <Redirect from="/" to="/home" exact />

                        <Route path='/home/:path?/:id?' exact>
                            <HomeLayout>
                                <Switch>
                                    <Route path='/home' exact component={Home} />
                                    <Route path='/home/about' component={About} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </HomeLayout>
                        </Route>

                        <AuthorizedRouter authed={authenticated} path='/auth/:path?' exact component={() => (
                            <AuthLayout>
                                <Switch>
                                    <Route path='/auth' exact component={Login} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </AuthLayout>
                        )} />
                        <PrivateRouter authed={authenticated} path='/admin/:fpath?/:spath?/:param' exact component={() => (
                            <DashboardLayout>
                                <Switch>
                                    <Route path='/admin' exact component={Dashboard} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </DashboardLayout>
                        )} />

                        <Route path="/error" exact component={NotFound} />
                        <Redirect from='*' to='/error' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Router