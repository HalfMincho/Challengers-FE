// action 타입
const SIGN_UP_REGISTER = 'account/SIGN_UP_REGISTER';
const SIGN_UP_SUCCESS = 'account/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'account/SIGN_UP_FAILURE';

// action 생성 함수
export const signUpRegister = () => ({ type: SIGN_UP_REGISTER });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpFailure = () => ({ type: SIGN_UP_FAILURE });

// 초기상태 
const initialState = {
  login: {
    status: 'INIT'
  },
  register: {
    status: 'INIT',
    error: -1
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: ''
  }
};

// Reducer
export default function auth(state = initialState, action) {
  switch(action.type) {
    case SIGN_UP_REGISTER:
      return {
        ...state,
        register: {
          status: 'WAITING',
          error: -1
        }
      }
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          register: {
            ...state.register,
            status: 'SUCCESS'
          }
        }
      case SIGN_UP_FAILURE:
        return {
          ...state,
          register: {
            ...state.register,
            status: 'FAILURE',
            error: action.error
          }
        }
        default:
          return state;
  }
}