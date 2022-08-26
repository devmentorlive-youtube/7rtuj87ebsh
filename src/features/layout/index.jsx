function Main({ children }) {
  return <main className="p-8">{children}</main>;
}

function Footer() {
  return <footer>&copy; 2002 - Awesome minds</footer>;
}

function Header() {
  return (
    <header>
      <div className="flex items-center p-8 gap-8">
        <div>logo</div>
        <div className="flex-grow">menu</div>
        <div>auth menu</div>
      </div>
    </header>
  );
}

export default function Layout({ children }) {
  return (
    <div className="app container mx-auto bg-gray-800 text-white border-[1px]">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
