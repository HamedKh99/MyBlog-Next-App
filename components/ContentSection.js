import { useState } from "react";

import PostCard from "./PostCard";

export default function ContentSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabItems = [
    {
      name: "All",
    },
    {
      name: "Technology",
    },
    {
      name: "Video Games",
    },
    {
      name: "Travel",
    },
  ];

  const getTabClass = (tabItemName) => {
    return tabItemName === activeTab
      ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
      : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  };

  const posts = [
    {
      id: 1,
      imgSrc: "/images/blog-post.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      imgSrc: "/images/blog-post.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 3,
      imgSrc: "/images/blog-post.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 4,
      imgSrc: "/images/blog-post.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 5,
      imgSrc: "/images/blog-post.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  return (
    <div>
      <div className="text-sm font-medium text-center mt-12 text-gray-500 dark:text-gray-400">
        <ul className="flex flex-wrap -mb-px">
          {tabItems.map((tabItem) => (
            <li key={tabItem.name} className="mr-2">
              <button
                className={getTabClass(tabItem.name)}
                onClick={() => setActiveTab(tabItem.name)}
              >
                {tabItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {
          posts.map((post) => (
            <PostCard key={post.id} {...post}/>
          ))
        }
      </div>
    </div>
  );
}
