import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import authReducer, { AuthState } from '../features/auth';
import counterReducer, { CounterState } from '../features/Counter';

// Root State Return Props
export interface RootStateProps {
  counter: CounterState
  auth: AuthState
}

// Store
export const store: ToolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
