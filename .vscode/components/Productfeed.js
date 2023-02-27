
import Product from "./Product";

function Productfeed({ products }) {
  console.log(products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(
        ({ category, id, image, description, rating, price, title }) => (
          <Product
            key={id}
            image={image}
            category={category}
            description={description}
            rating={rating}
            price={price}
            title={title}
          />
        )
      )}
    </div>
  );
}

export default Productfeed;
