import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';
import { ToastProvider } from 'react-toast-notifications';
import '../stylesheets/App.css';





const App = ()=>{



    return(
        <div className="ui container">
            <Router history={history}>
            <div> 
            <Header className="header" />
            <ToastProvider autoDismiss={true} autoDismissTimeout={3500} >
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
            </ToastProvider>
            </div>
            </Router>
        </div>
    )
};

export default App;