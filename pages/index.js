import Sidebar from "../components/Sidebar"
import MainSection from "../components/MainSection"

export default function Home() {
  return (
    <div className="relative bg-neutral-100">
      <Sidebar />

      <MainSection />
    </div>
  )
}
