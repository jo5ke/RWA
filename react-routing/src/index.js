import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Hello from './components/hello';
import World from './components/world';

ReactDOM.render(
        (
        <BrowserRouter>
            <div>
                <Route path="/hello" component={Hello} />
                <Route path="/world" component={World} />
                {/* njega uvek na kraju, posto matchuje, nesto nije radilo */}
                <Route path="/" component={Hello} />
            </div>
        </BrowserRouter>
        )
        , document.getElementById('root'));
        
registerServiceWorker();
