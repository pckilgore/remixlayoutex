import { Outlet } from "remix";

export default function Layout() {
  return (
    <>
      <div className="text-xs px-4 pt-4">layout</div>
      <div className="border-4 border-red-900">
        <nav>
          Shared Nav:{" "}
          <ul className="w-1/2 flex justify-between">
            <li className="pr-2">
              <a href="/" className="underline text-blue-700">
                index
              </a>
            </li>
            <li>
              <a href="/subpage" className="underline text-blue-700">
                subpage-sharing-layout
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-xs px-4 pt-4">layout outlet</div>
        <Outlet />
      </div>
    </>
  );
}
