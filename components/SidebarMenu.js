export default function SidebarMenu() {
  const sidebarOptions = [
    {
      name: "Blog",
    },
    {
      name: "Resume",
    },
    {
      name: "Contact me",
    },
  ];

  return (
    <div className="overflow-y-auto w-full mt-8 py-4">
      <ul className="space-y-2">
        {sidebarOptions.map((option) => (
          <li key={option.name}>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-base font-medium dark:text-white hover:bg-neutral-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">{ option.name }</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
