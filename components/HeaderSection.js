import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Socials from "./Socials";

export default function HeaderSection() {
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="text-2xl font-bold basis-1/6">Hamed</h2>

      <form className="basis-2/5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon color="gray" icon={faMagnifyingGlass} />
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm rounded-md shadow-md dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
            required
          />
        </div>
      </form>

      <Socials />
    </div>
  );
}
