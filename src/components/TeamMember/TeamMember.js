import React from "react";
import { useDispatch } from "react-redux";

const TeamMember = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch({
      type: "SET_SLIDE",
      id: e.currentTarget.id,
    });
    dispatch({
      type: "OPEN_MODAL",
      open: true,
    });
  };

  return (
    <>
      <div className="team-member" onClick={handleClick} id={props.index}>
        <img
          className="team-member__image"
          src={require(`../../assets/images/${props.src}`)}
          alt="string"
        ></img>
        <h2 className="team-member__name">{props.name}</h2>
        <div className="team-member__email">
          <span className="team-member__envelope"></span>
        </div>
        <div className="team-member__description">
          <p className="team-member__job">{props.position}</p>
          <p className="team-member__location">{props.location}</p>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
