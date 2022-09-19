import http from "../http-common";

class ProductosDataService {
	getAll() {
		return http.get("/");
	}

}

export default new ProductosDataService();