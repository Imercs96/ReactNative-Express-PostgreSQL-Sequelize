import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { publicAPI } from '../../api/index';
import { JWT, UserSignInResponse, UserSignInValues, UserSignUpValues } from '../../interfaces/user';

// Types
type Auth = 'checking' | 'authenticated' | 'not-authenticated';

// Auth State Props
export interface AuthState {
  status: Auth,
  statusMessage: string;
  jwt: JWT;
  user: UserSignUpValues | null;
}

// Initial State
const initialState: AuthState = {
  status: 'checking',
  statusMessage: '',
  jwt: { expiresIn: null, token: null},
  user: null
};

export const singInRequest: (signInData: UserSignInValues) => (dispatch: Dispatch) => Promise<any> = (signInData) => async (dispatch) => {
  try {
    console.log({ signInData });
    dispatch(singInPending());
    const response = await publicAPI.post('/auth', signInData);
    console.log(response.data, 'response');
    if(response) return dispatch(singInSuccess(response?.data));
  } catch(error) {
    return dispatch(singInError());
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    singInPending: () => initialState,
    singInSuccess: (state: AuthState, action: PayloadAction<UserSignInResponse>) => {
      state.status = 'authenticated';
      state.statusMessage = 'Auth Success';
      state.user = action.payload.user;
      state.jwt.expiresIn = action.payload.jwt.expiresIn;
      state.jwt.token = action.payload.jwt.token;
    },
    singInError: (state: AuthState) => {
      state.status = 'not-authenticated';
      state.statusMessage = 'Error sign in. Please check your email, username and password fields';
      state.user = null;
      state.jwt.expiresIn = null;
      state.jwt.token = null;
    }
  }
});



// Action creators are generated for each case reducer function
export const { singInError, singInPending, singInSuccess } = authSlice.actions;

export default authSlice.reducer;