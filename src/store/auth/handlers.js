export const handleIfPending = state => {
  state.isLoading = true
}

export const handleIfReject = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

export const handleIfFulfilled  = (state, { payload }) => {
	  state.token = payload.token
    state.profile = payload.user
    state.isLoading = false
    state.error = null
}