import Link from 'next/link';

export default function HomeSocial() {
  return (
    <>
      <section className="home-social container">
        <header>
          <h1>
            <span>We are</span> Social
          </h1>
        </header>

        <ul>
          <li>
            <Link href="/" title="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="Pinterest">
              <i className="fa-brands fa-pinterest"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
