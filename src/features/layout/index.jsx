import { useContext } from "react";
import AuthProvider, { AuthContext } from "@/features/auth";
import { SelectedPersonContext } from "@/features/people/selected-person";

function Main({ children }) {
  return <main className="p-8">{children}</main>;
}

function Footer() {
  return <footer>&copy; 2002 - Awesome minds</footer>;
}

function Header() {
  const { login, user } = useContext(AuthContext);
  const { selectedPerson } = useContext(SelectedPersonContext);
  return (
    <header>
      <div className="flex items-center p-8 gap-8">
        <div>logo</div>
        <div className="flex-grow">menu</div>
        {selectedPerson && <div>selected person: {selectedPerson.name}</div>}
        <div>{user ? user.name : <button onClick={login}>Log in</button>}</div>
      </div>
    </header>
  );
}

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <div className="app container mx-auto bg-gray-800 text-white border-[1px]">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
