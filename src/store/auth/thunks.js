import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, signUpApi, logoutUser, clearAuthHeader, setAuthHeader } from '../../api/authApi'

export const signUpThunk = createAsyncThunk('auth/signup', async (body, { rejectWithValue }) => {
	try {
		const { data } = await signUpApi(body)
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
	try {
		const data = await loginApi(body)
		setAuthHeader(data.token)
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
	try {
		await logoutUser();
		clearAuthHeader();
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue, getState }) => {
		try {
			setAuthHeader(getState().auth.token)
			const data = await refreshApi();
      		return data.data;
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)