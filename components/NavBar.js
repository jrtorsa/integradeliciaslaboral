import Link from "next/link";
import { useRouter } from 'next/router';

const links = [
  {label:'Integra Delicias Laboral', href: '/' },
  {label:'Nosotros', href: '/about-us' },
  {label:'Servicios', href: '/services' },
  {label:'Contacto', href: '/contact' },
]

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="container">
          {links.map(({label, href}, index) => (
            <p key={index} className={router.route === href ? 'selected' : ''}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </p>
          ))}
      </div>
      <style jsx>{`
        a {
          padding: 0 30px 0 30px;
          color: #e3170a;
          text-decoration: none;
        }
        p.selected {
          text-decoration: underline;
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
