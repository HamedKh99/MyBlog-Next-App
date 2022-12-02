import Sidebar from "../components/Sidebar";
import HeaderSection from "../components/HeaderSection";

export default function MainLayout({ children }) {
  return (
    <div className="relative bg-neutral-100 h-full">
      <Sidebar />

      <div className="relative ml-64 top-0 px-16 py-8">
        <HeaderSection />

        {children}
      </div>
    </div>
  );
}
