import { Fragment } from "react";
import ProductCard from "../components/card/ProductCard";
import categories from "../components/data/category";
import products from "../components/data/products";

import "./Home.css";

const HomePage = () => {

  return (
    <Fragment>
      <section>
        <div className="container">

          {categories.map((category, i) => (
            <Fragment key={i}>
              <div className="row">
                {products
                  .filter((el) => el.category === category.name)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                    >
                      <ProductCard {...product} />
                    </div>
                  ))}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
