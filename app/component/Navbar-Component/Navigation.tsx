import DesktopNavbar from './Desktop-Navbar';
import MobileNavbar from './Mobile-Navbar';

export function Navigation() {
  return (
    <div className="fixed top-2 left-1/2 z-40 flex w-[95%] max-w-6xl -translate-x-1/2 gap-3 rounded-full border border-orange-300 p-2 backdrop-blur-md sm:w-[90%] sm:rounded-full sm:p-3 md:w-[85%] md:p-4 lg:w-full">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
