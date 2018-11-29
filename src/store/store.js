import Vue from 'vue'
import Vuex from 'vuex'

// Import defaults
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// Import modules
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		auth,
	}
})
