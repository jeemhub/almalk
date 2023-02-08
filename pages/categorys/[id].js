
import Header from "../../components/Header";
import Product from "../../components/Product";

function Productapi1({ id, api2 }) {

  return (
    <>
    <Header />
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
      {
        api2.map(
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
            ))
      }
    </div>
    </>
  );
}

export default Productapi1;




export const getServerSideProps = async (context) => {
    
    const { id } = context.query;
    console.log(context.query)
    const api2 = await fetch(`https://fakestoreapi.com/products/category/${id}`).then(
        (res) => res.json()
      )
      
      return { props: {
        api2,
        
        id : id,
        
      }}
}