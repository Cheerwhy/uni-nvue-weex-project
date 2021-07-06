import request from "@/request";
export const getGoods = (params) => {
	return request({
		url: "/shop/getGoods",
		method: "get",
		params,
	});
};
