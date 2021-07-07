import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		// 上一个tabBarItem的索引
		beforeIndex: null,
		// 当前tabBarItem的索引
		currentIndex: null,
	},
	mutations: {
		setCurrentIndex(state, value) {
			state.currentIndex = value;
		},
		changeIndex(state, value) {
			state.beforeIndex = state.currentIndex;
			state.currentIndex = value;
		}
	},
	actions: {

	},
	modules: {

	}

})
export default store
