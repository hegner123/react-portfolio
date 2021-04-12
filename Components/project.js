import React from 'react'


class Project  extends React.Component{
    constructor(props) {
        super(props);
      }
      render(){
          return(
              <div>
                   <h2>{this.props.projectName}</h2>
                    <a href={this.props.projectUrl}>Github</a>
              </div>
          );
      }
}

export default Project