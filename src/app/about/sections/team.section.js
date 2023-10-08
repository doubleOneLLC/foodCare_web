"use client";

import { useEffect, useState } from "react";
import AboutTeamItem from "../components/about-team-item";
import { apiBase, endStatic, endTeam } from "@/constant/api";

function TeamSection() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiBase + endTeam);
        const data = await response.json();
        setTeamData(data.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="my-[62px]">
      <h1 className="font-bold text-4xl text-center">Tim Kita</h1>
      <div className="grid grid-flow-col py-6 px-6 gap-6 overflow-x-scroll">
        {teamData.map((item) => (
          <AboutTeamItem
            key={item.id}
            img={`${apiBase}${endStatic}/${item.image}`}
            name={item.name}
            role={item.role}
            univ={item.univ}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
