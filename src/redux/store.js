import { configureStore, createSlice } from '@reduxjs/toolkit';

// Crea el segmento
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    surname: '',
    username: '',
    email: '',
    pw: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPw: (state, action) => {
      state.pw = action.payload;
    },
  },
});

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    data: {}
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});


// Extrae el reductor y las acciones del segmento 
const {actions: userActions } = userSlice;
const {actions: chartActions } = chartsSlice;


// Crea la tienda Redux
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    charts: chartsSlice.reducer
  },
});


export const {
  setName,
  setSurname,
  setUsername,
  setEmail,
  setPw,
} = userActions;

export const {
  setData
} = chartActions;

export default store;
