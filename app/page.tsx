"use client";
import ProductBox from "@/components/ProductBox";
import useProductsStore from "@/stores/products";
import { useEffect } from "react";

export default function Home() {
	const { products, fetchProducts } = useProductsStore();

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="w-full px-5">
			<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
				{products?.map((product) => (
					<ProductBox product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}
