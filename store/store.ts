import {
  AnyAction,
  PreloadedState,
  Store,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import user from "./reduxSlice/userSlice/userSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { movieApi } from "../api/movieApi";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { EnumKeys } from "../constants/enumKeys";

const persistConfig = {
  storage: ExpoFileSystemStorage,
  key: EnumKeys.USER,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, user),
  [movieApi.reducerPath]: movieApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          warnAfter: 128,
        },
      }).concat(movieApi.middleware),
  });
  return store;
};

export const setupPersistor = (store: Store<any, AnyAction>) =>
  persistStore(store);

export const store = setupStore();
export const persistor = setupPersistor(store);

export type RootState = ReturnType<typeof rootReducer>;
