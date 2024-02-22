type HeaderProps = {
  pagename: string;
};

const Header = ({ pagename }: HeaderProps) => {
  return (
    <header className="text-lg md:text-2xl lg:text-4xl font-semibold p-2">
      {pagename}
    </header>
  );
};

export default Header;
