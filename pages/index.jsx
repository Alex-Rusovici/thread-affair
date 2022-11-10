import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import HomePayment from "../components/homepage/HomePayment";
import HomeSocial from "../components/homepage/HomeSocial";

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5">
        <Header></Header>
      </header>
      {/* ./header */}

      <main className="content">

        <div className="content-main container">
          <HomePayment></HomePayment>
          <HomeSocial></HomeSocial>
        </div>
      </main>
      {/* ./main */}

      <footer className="footer">
        <Footer></Footer>
      </footer>
      {/* footer */}
    </div>
  );
}
