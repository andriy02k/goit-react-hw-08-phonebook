export const handleIfPending = state => {
  state.isLoading = true
}

export const handleIfReject = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

export const handleIfFulfilled  = (state, { payload }) => {
    state.profile = payload.user
	  state.token = payload.token
    state.isLoading = false
    state.error = null
}