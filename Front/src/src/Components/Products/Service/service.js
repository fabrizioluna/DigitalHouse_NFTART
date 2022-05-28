import { client } from "../../../configAxios/configAxios";


export const allProduct = () => {
  return client
    .get('http://localhost:3000/api/allproduct')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

