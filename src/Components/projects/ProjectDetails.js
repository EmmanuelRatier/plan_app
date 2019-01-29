import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-">
            <div className="card-content">
                <span className="card-">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis consequuntur illo, praesentium quia, odio vitae nesciunt maiores id quasi adipisci veniam. Ut in est earum quidem dignissimos dolor adipisci?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Emmanuel</div>
                <div>29th January, 17am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
