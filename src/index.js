import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer/feedbackReducer'
import './index.css'

const store = createStore(counterReducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: '@counter/GOOD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: '@counter/OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: '@counter/BAD'
    })
  }

  const reset = () => {
    store.dispatch({
      type: '@counter/ZERO'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderApp()

store.subscribe(renderApp)
