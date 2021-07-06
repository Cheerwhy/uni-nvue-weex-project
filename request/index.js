import axios from "axios";

const service = axios.create({
	baseURL: "http://1.116.220.26:8000",
});
// 自定义适配器来适配uniapp语法
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: false,
			complete: function complete(response) {
				// console.log("执行完成：", response)
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}
// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		// 每次请求带上token
		// config.headers.Authorization = Cookies.get("token") || "";
		//config.headers.Authorization = sessionStorage.getItem("token") || "";
		config.timeout = 5000;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(res) => {
		if (res.data.code !== 20000) {
			// 请求错误
			// token失效
			if (res.data.code === 50001) {
				// token失效逻辑
			}
			return Promise.reject(res.data.msg);
		} else {
			return res.data;
		}
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default service;
