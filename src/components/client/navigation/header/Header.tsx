import { Navigation } from '../navigation/Navigation';

export function Header() {
  return (
    // <header className="py-5 bg-white/[.2] container rounded-2xl sticky top-5 shadow-md">
    <header className="py-5 container sticky top-5 flex justify-center">
      <Navigation />
    </header>
  );
}
