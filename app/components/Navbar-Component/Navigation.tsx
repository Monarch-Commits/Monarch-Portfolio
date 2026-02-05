import DesktopNavbar from './Desktop-Navbar';
import MobileNavbar from './Mobile-Navbar';

export function Navigation() {
  return (
    <div className="fixed top-2 left-1/2 z-40 flex w-full max-w-6xl -translate-x-1/2 gap-3 border-b border-orange-300 p-2 backdrop-blur sm:w-[90%] sm:p-3 md:w-[85%] md:p-4 lg:w-full">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
