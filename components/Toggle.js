export default function Toggle() {
  return (
    <label className="flex relative items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />

      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      
      <span className="ml-3 text-xs font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span>
    </label>
  );
}
