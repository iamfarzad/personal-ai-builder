
import LiteraturePage from "@/components/literature-database/literature-page"
import Navigation from "@/components/navigation"

export default function Literature() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="pt-20">
        <LiteraturePage />
      </div>
    </div>
  )
}
