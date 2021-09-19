// import { createStore } from 'redux'
import { requestAll, requestData } from '../axios'

const initialState = {}
const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'

export const signupUser = (input) => {
  const response = requestData("post", '/user', input)
  console.log('호출!!!', response)
  return {
    type: SIGNUP_USER,
    payload: response,
  }
}

export const loginUser = (input) => {
  const response = requestAll("post", '/login', input)
  console.log('호출!!!', response)
  return {
    type: LOGIN_USER,
    payload: response,
  }
}

// 좀 더 직관적으로 이해하기 위해 우선 createReducer를 사용하지 않는다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, success: action.payload }
    case LOGIN_USER:
      return { ...state}
    default:
      return state
  }
}



// const store = createStore(reducer)

// store.subscribe()

export default reducer