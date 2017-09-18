import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import Counter from './Counter'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import myReducer from './myReducer'
import  rootSaga  from './sagas'
import Blogs from './blogApp/blogList'
import BlogReducer from './blogReducer'
import { Provider } from 'react-redux'
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk' // no changes here 😀


const rootReducer = combineReducers({
  form: formReducer,
  BlogReducer
})

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)))

// sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Provider store={store}>
        <Blogs store={store}/>
    </Provider>,
    document.getElementById('my-app')
  )
}

render()
store.subscribe(render)
