import { useState } from "react";
import { PRODUCTS } from "./data";

function SearchBar({ search, onSearch, isStock, setStock }) {
  const handleChange = (event) => {
    onSearch(event.target.value.toLocaleLowerCase());
  };

  const handleChangeCheckbox = (event) => {
    setStock(event.target.checked);
  };

  return (
    <div>
      <input value={search} onChange={handleChange} placeholder="Search..." />
      <div>
        <label>
          <input
            value={isStock}
            onChange={handleChangeCheckbox}
            type="checkbox"
          />{" "}
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

function ProductRow({ name, price }) {
  return (
    <div>
      <span style={{ width: "140px", display: "inline-block" }}>{name}</span>
      <span>{price}</span>
    </div>
  );
}

function ProductTable({ search, isStock, products }) {
  const fruits = [];
  const vegetables = [];
  products.forEach((item) => {
    if (isStock && !item.stocked) {
      return;
    }
    if (search !== "" && item.name.toLocaleLowerCase().indexOf(search) === -1) {
      return;
    }
    if (item.category === "Fruits") {
      fruits.push(<ProductRow key={item.name} {...item} />);
    } else {
      vegetables.push(<ProductRow key={item.name} {...item} />);
    }
  });

  return (
    <div>
      <h2>Fruits</h2>
      {fruits}
      <h2>Vegetables</h2>
      {vegetables}
    </div>
  );
}

function FilterableProductTable({ products }) {
  const [search, setSearch] = useState("");
  const [isStock, setStock] = useState(false);
  return (
    <div>
      <SearchBar
        search={search}
        onSearch={setSearch}
        isStock={isStock}
        setStock={setStock}
      />
      <ProductTable isStock={isStock} search={search} products={products} />
    </div>
  );
}

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
