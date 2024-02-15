import Navbar from "../components/navbar";
import StickyFooter from "../components/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="header">
        <h1>Antonio Maties Home Page</h1>
      </div>
      <StickyFooter />
    </>
  );
}

export default HomePage;
