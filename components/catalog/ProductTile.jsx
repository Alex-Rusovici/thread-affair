import Link from 'next/link';

export default function ProductTile() {
  return (
    <>
      <article className="product-tile">
        <header className="product-tile-header">
          <div className="product-tile-image">
            <Link href="/" alt="Thread affair suit">
              <picture>
                <img src="/images/products/product-01a.jpg" alt="Suit" />
              </picture>
            </Link>

            <span className="badge">%</span>
          </div>

          <h1 className="product-tile-title">
            <Link href="/" title="Thread Affair Traveler Suit">
              Thread affair Traveler Suit
            </Link>
          </h1>

          <h2 className="product-tile-subtitle">
            <Link href="/" title="London fit semi-slim">
              London fit semi-slim
            </Link>
          </h2>
        </header>

        <section className="product-tile-pricing">
          <span className="product-price-regular">399.00</span>

          <span className="product-price">270.00</span>
        </section>

        <footer className="product-tile-footer">
          <button className="button" title="Add to cart" type="button">
            Add to cart
          </button>
        </footer>
      </article>
    </>
  );
}
