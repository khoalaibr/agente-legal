import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice'; // <-- Importamos el reducer

export const store = configureStore({
  reducer: {
    // Registramos nuestro slice en la tienda.
    // La clave 'dashboard' será el nombre de esta porción del estado.
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
