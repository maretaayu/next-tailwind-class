import { useState, useEffect } from "react";

import { AchievementContentList } from "./AchievementContentList";
// const DATA = [
//   {
//     title: "95%",
//     description: "Customer Satisfaction",
//   },
//   {
//     title: "4.9/5",
//     description: "Average Rating",
//   },
//   {
//     title: "100%",
//     description: "Quality Assurance",
//   },
//   {
//     title: "100%",
//     description: "On-Time Delivery",
//   },
//   {
//     title: "100%",
//     description: "On-Time Delivery",
//   },
// ];

function AchievementContentListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=2"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return <AchievementContentList achievements={data} />;
}

export { AchievementContentListContainer };
