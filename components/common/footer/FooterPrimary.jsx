import Link from "next/link";

export default function FooterPrimary() {
  return (<>
    <div className="container footer-primary-inner">

      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">Information</Link>
          </li>

          <li>
            <Link href="/" title="Contact Us">Contact Us</Link>
          </li>

          <li>
            <Link href="/" title="Track my order">Track my order</Link>
          </li>

          <li>
            <Link href="/" title="Shipping">Shipping</Link>
          </li>

          <li>
            <Link href="/" title="Free shipping">Free shipping</Link>
          </li>

          <li>
            <Link href="/" title="My account">My account</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">Careers</Link>
          </li>

          <li>
            <Link href="/" title="About us">About us</Link>
          </li>

          <li>
            <Link href="/" title="Our story">Our story</Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">Art & Culture</Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">Our private labels</Link>
          </li>

          <li>
            <Link href="/" title="Stores">Stores</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">Services</Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">Ship to store</Link>
          </li>

          <li>
            <Link href="/" title="Gift card">Gift card</Link>
          </li>

          <li>
            <Link href="/" title="Online only">Online only</Link>
          </li>

          <li>
            <Link href="/" title="Tips and tricks">Tips and tricks</Link>
          </li>

          <li>
            <Link href="/" title="Home">Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">Loyalty programs</Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the simons">Sign up to the simons</Link>
          </li>

          <li>
            <Link href="/" title="My account">My account</Link>
          </li>

          <li>
            <Link href="/" title="Conditions">Conditions</Link>
          </li>

          <li>
            <Link href="/" title="FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <p>
          <span>Thread affair</span> Milano
        </p>

        <p>
          Largo Augusto 3, Milano, 20122, Milano, IT
        </p>

        <p>
          Tel:+1-877-666-1840
        </p>

        <a href="mailto:office@threadaffair.com">office@threadaffair.com</a>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+1-877-666-1840" title="Call us">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer" title="Chat with us">
              <i className="fa-solid fa-comments"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto:office@threadaffair.com" title="Email us">
              <i className="fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </>);
}
