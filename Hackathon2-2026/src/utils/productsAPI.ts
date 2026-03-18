import { apiRequest } from "./RestAPI";

export function AddProduct(product_name: string, product_quantity: number, product_price: number, model_name: string, category: string, notes: string) {
return apiRequest("/api/products/addproduct", {
method: "POST",
body: JSON.stringify({ product_name, product_quantity, product_price, model_name, category, notes}),
});
}

export function GetProduct() {
return apiRequest("/api/products/allproduct", {
method: "GET",
});
}

export function SearchProduct(product_name: string)
{
return apiRequest("/api/products/searchproduct", {
method: "POST",
body: JSON.stringify({product_name}),
});
}

export function EditProduct(product_id: number, product_name: string, product_quantity: number, product_price: number, model_name: string, category: string, notes: string) {
return apiRequest("/api/products/editproduct", {
method: "POST",
body: JSON.stringify({product_id, product_name, product_quantity, product_price, model_name, category, notes}),
});
}

export function DeleteProduct(product_id: number)
{
return apiRequest("/api/products/deleteproduct", {
method: "DELETE",
body: JSON.stringify({product_id}),
});
}
