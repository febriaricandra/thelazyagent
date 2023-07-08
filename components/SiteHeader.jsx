// ./components/SiteHeader.jsx
const { default: Link } = require("next/link");
const { default: Image } = require("next/image");

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="wrapper flex flex-row items-center">
        <Link href={"/"}>
          <figure title="Site header">
            <Image
              src="/zyro-image(2).png"
              width={240}
              height={240}
              alt="cover"
              className=""
            />
          </figure>
        </Link>

        <nav className="site-nav">
          <ul className="links">
            <li className="link">
              <Link className="mx-2" href={"/articles"}>
                Articles
              </Link>
              <Link className="" href={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
