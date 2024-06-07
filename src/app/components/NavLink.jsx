import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;
