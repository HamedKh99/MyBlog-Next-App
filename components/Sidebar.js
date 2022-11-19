import AvatarSection from "./AvatarSection";
import SidebarMenu from "./SidebarMenu";
import Toggle from "./Toggle";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 w-64 h-full py-8 bg-white">
      <AvatarSection />

      <SidebarMenu />

      <div className="relative top-16 px-4 flex flex-row justify-center">
        <Toggle />
      </div>
    </aside>
  );
}
