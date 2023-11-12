const state = {
	token: null,
	user: null
}
const mutations = {
	setUser(state, user) {
		state.user = user
	},
	setToken(state, token) {
		state.token = token;
	}
}
export default {
	state,
	mutations
}