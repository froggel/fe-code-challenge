import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

type historyEntry = {
  time: number;
  price: number;
};

type PriceHistoryResponse = {
  symbol: string | null;
  history: historyEntry[];
};

type PriceHistoryState = {
  symbol: string | null;
  history: historyEntry[];
  apiState: {
    loading: boolean | null;
    error: boolean;
  };
  currentSymbol: string | null;
};

const initialState: PriceHistoryState = {
  symbol: null,
  history: [],
  apiState: {
    loading: null,
    error: false
  },
  currentSymbol: null
};

export const fetchPriceHistory = createAsyncThunk(
  'stocks/fetchPriceHistory',
  // if you type your function argument here
  async (symbolId: string, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3100/api/stock/history/${symbolId}`, {
        signal: thunkAPI.signal
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ${symbolId} price history`);
      }

      return (await response.json()) as PriceHistoryResponse;
    } catch (error) {
      if (thunkAPI.signal.aborted) {
        return thunkAPI.rejectWithValue(`${symbolId} request aborted`);
      }

      throw error;
    }
  }
);

const selectSymbolInfo = (state: RootState) => state.priceHistory.symbol;
const selectPriceHistory = (state: RootState) => state.priceHistory.history;
const apiState = (state: RootState) => state.priceHistory.apiState;

const priceHistorySlice = createSlice({
  name: 'priceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPriceHistory.fulfilled, (state, action) => {
      if (state.currentSymbol !== action.meta.arg) return;
      
      const { symbol, history } = action.payload;
      state.apiState.error = false;
      state.apiState.loading = false;
      state.history = history;
      state.symbol = symbol;
    });

    builder.addCase(fetchPriceHistory.rejected, (state, action) => {
      if (state.currentSymbol !== action.meta.arg) return;

      if (!action.meta.aborted) {
        state.apiState.error = true;
        state.apiState.loading = false;
      }
    });

    builder.addCase(fetchPriceHistory.pending, (state, action) => {
      state.apiState.error = false;
      state.apiState.loading = true;
      state.currentSymbol = action.meta.arg;
    });
  }
});

const selectors = {
  selectPriceHistory,
  selectSymbolInfo,
  apiState
};

export default priceHistorySlice;
export { selectors };
