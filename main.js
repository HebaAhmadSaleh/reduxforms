import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from './sagas'
import Blogs from './blogApp/blogList'
import BlogReducer from './blogReducer'
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';


const loggerMiddleWare = store => next => action =>{
  console.log("dispatching =>",action)
next(action)  
}

 const composeEnhancers = composeWithDevTools({});

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(loggerMiddleWare))
)

// sagaMiddleware.run(rootSaga);

 const action = type => store.dispatch({type})


// const store = createStore(
//   reducer,
//   devToolsEnhancer())


function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('my-app')
  )
}

render()
store.subscribe(render)
