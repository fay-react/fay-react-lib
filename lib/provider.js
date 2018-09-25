/**
 * Created by feichongzheng on 16/12/18.
 */
// import './polyfill/MutationObserver';
import React from 'react';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'connected-react-router';
import initStore from './store';
let store = initStore();
import LocaleProvider from 'fay-react-ui/locale-provider';
import zh_CN from 'fay-react-ui/locale-provider/locale/zh_CN';
import 'fay-react-ui/res/antd/style';
import Auth from './auth';
const history = createBrowserHistory();
import {Route} from 'react-router-dom';
import Loading from './loading';

export default ({root}) => {
    return (
        <LocaleProvider locale={zh_CN}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Auth unAuth={root.unAuth}>
                        <Route component={root}/>
                        <Loading/>
                    </Auth>
                </ConnectedRouter>
            </Provider>
        </LocaleProvider>
    );
}