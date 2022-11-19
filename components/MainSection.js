import HeaderSection from "./HeaderSection"
import ContentSection from "./ContentSection"

export default function MainSection() {
  return (
    <div className="relative ml-64 top-0 px-16 py-8">
      <HeaderSection />

      <ContentSection />
    </div>
  )
}