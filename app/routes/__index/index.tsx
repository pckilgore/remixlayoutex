import { Outlet } from "remix";

export default function Index() {
  return (
    <div className="border-4 border-blue-900">
      <span className="whitespace-pre font-[monospace] bg-gray-200">
        __index/index.tsx
      </span>
      <Outlet />
    </div>
  );
}
