import "./index.css";

import {
  products,
  categories,
  inventoryValue,
  categoryName
}from "./data";

function Header() {
  return (
    <header className="cm-header">
      <h1 data-testid="cm-brand">CampusMart</h1>
      <nav className = "cm-nav">
        <a href="#">Trang chu</a>
        <a href="#">San pham</a>
        <a href="#">Gioi thieu</a>
      </nav>
    </header>
  );
}

function CategoryList(){
  return (
  <ul data-testid="cm-category-list" className="cm-category-list">
    {categories.map(c => (
      <li key={c.id}>
        <a href="#">{c.name}</a>
      </li>
    ))}
  </ul>
  )
}

function ProductCard({product}){
 return(
  <article className="cm-card" data-sku={product.sku}>
    <h3>{product.name}</h3>
    <p>{categoryName(product.category_id)}</p>
    <p className = "cm-card-price">{product.price} VND</p>
    <p>So luong: {product.qty}</p>
  </article>
 );
}

function ProductGrid(){ 
  return (
    <div className="cm-grid" data-testid="cm-product-table">
      {products.map(p => (
        <ProductCard key={p.sku} product={p}/>
      ))}
    </div>
  );
}

function Stats(){
  return (
    <section data-testid="cm-inventory-total">
      <p>So san pham = {products.length}</p>
      <p>Tong gia tri kho = {inventoryValue(products)} </p>
    </section>
  );
}

function App() {
  return(
    <main>
      {/* CM_EXPECT product_count=8 inventory_value=41380000 components=Header,CategoryList,ProductGrid,ProductCard,Stats */}
      <Header />
      <CategoryList />
      <ProductGrid />
      <Stats />
    </main>
  );
}
export default App;