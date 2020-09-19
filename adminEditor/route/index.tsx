import React from 'react';
import {ToastComponent, AlertComponent, Spinner} from 'amis';
import {Route, Switch, Redirect, HashRouter as Router} from 'react-router-dom';
import {observer} from 'mobx-react';
import {IMainStore} from '../store';
import NotFound from './NotFound';
const Preview = React.lazy(() => import('./Preview'));
const Editor = React.lazy(() => import('./Editor'));
const Register = React.lazy(() => import('./Register'));
const Login = React.lazy(() => import('./Login'));
import Qs from 'qs'
let ContextPath = '';

// gh-pages 环境时
if (process.env.NODE_ENV === 'production') {
    ContextPath = '/amis-admin'
}

export default observer(function({store}: {store: IMainStore}) {
    return (
        <Router>
            <div className="routes-wrapper">
                <ToastComponent key="toast" position={'top-right'} theme={store.theme} />
                <AlertComponent key="alert" theme={store.theme} />
                <React.Suspense fallback={<Spinner overlay className="m-t-lg" size="lg" />}>
                    <Switch>
                     
                        <Redirect to={`/login`} from={`/`} exact />
                        <Route path="/edit/:id" component={Editor} />
                        <Route path={`${ContextPath}/login`} exact component={Login} />
                        <Route path={`${ContextPath}/register`} exact component={Register} />
                        <Route component={Preview} />
                           
                        {store.user.isAuthenticated ? (
                            <Route path={`${ContextPath}/`} component={NotFound} />
                        ) : (
                            <Route path="*" exact component={Login} />
                        )}
                    </Switch>
                </React.Suspense>
            </div>
        </Router>
    );
});
