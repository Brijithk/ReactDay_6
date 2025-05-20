import { ProductList, products} from "./ProductData";
import { Product } from "./ProductData";
import '../css/Products.css'


type ProductListProps = {
  ProductItems: Product[];
  filterChoices: string[];
};

const ProductsItem: React.FC<ProductListProps> = ({ ProductItems , filterChoices}) => {
   const filteredAndSortedItems = ProductItems
    .filter((item) => {
      if (filterChoices.length === 0 || filterChoices.includes("all")) return true;
      return filterChoices.includes(item.name);
    })
    .sort((a, b) => (a.userChoice === "yes" && b.userChoice !== "yes" ? -1 : 1));
  return (
<div className="menu-container">
   {filteredAndSortedItems.map((item) => (
      <div key={item.id} className="product-card">
        <img src={item.image} alt={item.name} className="product-image" />
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">₹{item.price}</p>
      </div>
    ))}
</div>
  );
};

export default ProductsItem;
