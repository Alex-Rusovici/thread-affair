import ProductTile from '../catalog/ProductTile';

export default function HomeCatalogPreview(props) {
  // const productrs = props.products
  const { products } = props;

  return (
    <>
      <section className="home-catalog-preview container">
        <header>
          <h1>
            <span>Glamour</span> Suits
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br /> For the finest custom
            tailored experience, be sure to explore our selection of premium
            fabrics from one of the worlds oldest fabric mills, Vitale Barberis
            Canonico.
          </p>
        </header>

        <ul className="product-tiles">
          {products.map((product, index) => {
            return (
              <li key={index}>
                <ProductTile product={product}></ProductTile>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
