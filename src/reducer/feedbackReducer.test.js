import deepFreeze from 'deep-freeze'
import counterReducer from './feedbackReducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 1,
    ok: 23,
    bad: 34
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = initialState
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: '@counter/GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: initialState.good + 1,
      ok: initialState.ok,
      bad: initialState.bad
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: '@counter/OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: initialState.good,
      ok: initialState.ok + 1,
      bad: initialState.bad
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: '@counter/BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: initialState.good,
      ok: initialState.ok,
      bad: initialState.bad + 1
    })
  })

  test('zero is resetting the state', () => {
    const action = {
      type: '@counter/ZERO'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})
