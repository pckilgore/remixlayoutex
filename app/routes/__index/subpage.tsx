import { Outlet } from "remix";

export default function Subpage() {
  return (
    <div className="border-4 border-blue-900">
      <span className="whitespace-pre font-[monospace] bg-gray-200">
        __index/subpage.tsx
      </span>
      <Outlet />
    </div>
  );
}
