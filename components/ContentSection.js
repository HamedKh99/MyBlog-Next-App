export default function ContentSection() {
  return (
    <div class="text-sm font-medium text-center mt-12 text-gray-500 dark:text-gray-400">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            All
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Technology
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Video Games
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Travel
          </a>
        </li>
      </ul>
    </div>
  );
}
