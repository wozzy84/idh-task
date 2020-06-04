import React from 'react'


const TeamMember = (props) => {
    console.log(props.src)
    return(
        <>
        
        <div className="team-member">
            <img className="team-member__image" src={require(`../../assets/images/${props.src}`)} alt="string" ></img>
            <h2 className="team-member__name">{props.name}</h2>
            <div className="team-member__email"><span className="team-member__envelope"></span></div>
            <div className="team-member__description">
            <p className="team-member__job">{props.position}</p>
            <p className="team-member__location">{props.location}</p>
            </div>
   
        </div>

        </>
    )
}

export default TeamMember