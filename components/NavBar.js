import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <Link href="/">
          <a>Integra Delicias Delicias</a>
        </Link>
        <Link href="/about-us">
          <a>Nosotros</a>
        </Link>
        <Link href="/services">
          <a>Servicios</a>
        </Link>
        <Link href="/contact">
          <a>Contacto</a>
        </Link>
      </div>
      <style jsx>{`
        a {
          padding: 0 30px 0 30px;
          color: #e3170a;
        }
        .container {
          align-items: center;
          background-color: #fcf6b1;
          display: flex;
          height: 75px;
          justify-content: flex-end;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default NavBar;
