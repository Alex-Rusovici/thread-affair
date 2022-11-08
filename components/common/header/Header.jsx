import HeaderPrimary from "./HeaderPrimary";
import HeaderSecondary from "./HeaderSecondary";

export default function Header() {
  return (<>
    <section className="header-secondary">
      <HeaderSecondary></HeaderSecondary>
    </section>

    <section className="header-primary">
      <HeaderPrimary></HeaderPrimary>
    </section>
  </>);
}
