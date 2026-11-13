export default function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-1 border-t border-rule pt-6 text-[13px] text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Declan Javers</span>
        <span>Boston, Massachusetts</span>
      </div>
    </footer>
  )
}
