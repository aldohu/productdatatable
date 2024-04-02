import React from 'react';
import ProductTable from '../ProductTable/ProductTable.component';
import SearchBar from '../SearchBar  component/SearchBar.component';
import { useState } from 'react';
function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
}
export default FilterableProductTable;
