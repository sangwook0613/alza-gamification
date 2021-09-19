// import { createStore } from 'redux'
import { request } from '../axios'

const initialState = {}
const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'

export const signupUser = (input) => {
  const data = request("post", '/user', input)
  return {
    type: SIGNUP_USER,
    payload: data,
  }
}

export const loginUser = (input) => {
  const data = request("post", '/login', input)
  return {
    type: LOGIN_USER,
    payload: data,
  }
}

// 좀 더 직관적으로 이해하기 위해 우선 createReducer를 사용하지 않는다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, success: action.payload }
    case LOGIN_USER:
      return state
    default:
      return state
  }
}



// const store = createStore(reducer)

// store.subscribe()

export default reducer