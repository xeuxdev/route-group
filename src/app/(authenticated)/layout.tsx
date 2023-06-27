import AuthNav from "@/components/AuthNav"
import RouteProof from "@/components/RouteProof"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        {children}
      </main>

      {/* this would not be rerendered  */}
      <AuthNav />
      <RouteProof />
    </>
  )
}
