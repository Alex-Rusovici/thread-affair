import Link from "next/link";

export default function HeaderPrimary() {
  return <>
    <nav className="nav-primary">
      <ul>
        <li>
          <Link href="/" title="Home">Home</Link>
        </li>

        <li>
          <Link href="/" title="Costume">Costume</Link>
        </li>

        <li>
          <Link href="/" title="Camasi">Camasi</Link>
        </li>

        <li>
          <Link href="/" title="Accesorii">Accesorii</Link>
        </li>
      </ul>
    </nav>

    <nav className="nav-secondary mt-lg-3">
      <ul>
        <li>
          <Link href="/" title="Glamour suits">Glamour suits</Link>
        </li>

        <li>
          <Link href="/" title="Wedding suits">Wedding suits</Link>
        </li>

        <li>
          <Link href="/" title="Office suits">Office suits</Link>
        </li>

        <li>
          <Link href="/" title="Customize your suit">Customize your suit</Link>
        </li>
      </ul>
    </nav>
  </>;
}
