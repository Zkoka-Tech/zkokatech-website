export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-900">Zkokatech</p>
        <p className="text-sm text-slate-500">
          &copy; {year} Zkokatech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
