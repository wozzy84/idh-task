import React from "react";
import TeamMember from "../TeamMember/TeamMember";
import { workers } from "../../assets/workers-data";

const MeetOurTeam = () => {
  return (
    <>
      <section className="meet-section">
        <div className="meet-section__container">
          <h1 className="meet-section__header">MEET OUR TEAM</h1>
          <div className="meet-section__team-container">
            {workers.map((worker, index) => (
              <TeamMember
                key={index}
                index={index}
                name={worker.name}
                position={worker.position}
                location={worker.location}
                src={worker.src}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default MeetOurTeam;
