// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT TYPE OF DISPATCH ACTION 🚀')
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsupported Type Action ${action.type}`)
  }
}

function init(initialStateFromProps) {
  return {
    count: 10,
  }
}
function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(
    countReducer,
    {
      count: initialCount,
    },
    init,
  )
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
