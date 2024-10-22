import bclogo from "../assets/logos/bc-logo-beige.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="oppilas-tiedot">
          <h1>Waltteri Heino</h1>
          <h2>WP24K</h2>
          <h3>s2400316</h3>
          <h4>Portfolio</h4>
        </div>
        <figure id="logo">
          <img src={bclogo} alt="business college logo beige" />
        </figure>
      </header>
      <article className="ops">
        <h1>Tieto- ja viestintätekniikan perustutkinto</h1>
        <h2 id="tutOsat" className="sisennys-2rem">
          Ammatillisen tutkinnon osat 120osp
        </h2>
      </article>
    </>
  );
};

export default Header;
