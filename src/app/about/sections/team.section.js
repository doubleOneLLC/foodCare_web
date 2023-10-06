import React from "react";
import AboutTeamItem from "../components/about-team-item";

function TeamSection() {
  return (
    <div className="my-[62px]">
      <h1 className="font-bold text-4xl text-center">Tim Kita</h1>
      <div class="grid grid-flow-col py-6 px-6 gap-6 overflow-x-scroll">
        <AboutTeamItem
          img="/assets/images/team_jody.png"
          name="Jody Yuantoro"
          role="Hipster & Hacker"
          univ="Universitas Muhammadiyah Malang"
        />
        <AboutTeamItem
          img="/assets/images/team_daris.png"
          name="Daris Yusyfa Atqia"
          role="Hustler & Hacker"
          univ="Universitas Islam Nusantara Bandung"
        />
        <AboutTeamItem
          img="/assets/images/team_wahyu.png"
          name="Wahyu Febrian"
          role="Hipster & Hacker"
          univ="Universitas Dharma Andalas"
        />
        <AboutTeamItem
          img="/assets/images/team_aljuando.png"
          name="Aljuando Fijar M."
          role="Hipster"
          univ="Universitas Pendidikan Indonesia Bandung"
        />
        <AboutTeamItem
          img="/assets/images/team_reza.png"
          name="Reza Aditya Saputra"
          role="Hipster"
          univ="Universitas Singaperbangsa Karawang"
        />
        <AboutTeamItem
          img="/assets/images/team_asnafi.png"
          name="Muhammad Asnafi"
          role="Hipster"
          univ="Universitas Amikom Purwokerto"
        />
      </div>
    </div>
  );
}

export default TeamSection;
