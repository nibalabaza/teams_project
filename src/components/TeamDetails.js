import React from 'react';

class TeamDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state= {
            team: {},
            newName : ''
        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        const response = await fetch(`http://localhost:3050/TEAMS/${id}`);
        const json = await response.json();
        this.setState({ team: json.data })
        console.log("data", json.data)
    }


      delete = () => {
        const id = this.props.match.params.id //the api knows the team which is supposed to be deleted by the id
        let options = {
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
            // body: JSON.stringify({id_equipe: this.state.team.id_equipe})
             //the api need to know which team is supposed to be deleted by knowing the id of the team
        }
        let url = `http://localhost:3050/TEAMS/${id}`;
        fetch(url, options)
        .then(response => {
            console.log(response)
            if(response.ok){
                this.props.history.push('/team/');
            }
        }) 
    }

    updateName = (event) => {
        console.log(event.target)
        let target = event.target;
        this.setState({
           newName:event.target.value
        })
    }

    update = () => {
        const id = this.props.match.params.id
        const options = {
           method : "PUT",
           mode: "cors",
           headers: {'content-type': 'application/json'},
           body : JSON.stringify({nom_equipe: this.state.newName})
       }
       let url = `http://localhost:3050/TEAMS/${id}`;
       fetch(url, options)
       .then(response => {
        console.log(response)
      
        })
    }
    

    
    
    render() {
        const {id_equipe} = this.state.team //take the value of the id inside the object(team)
        const nom_equipe = this.state.newName
        return (
            <div>
               {this.state.team && <div>
                   <p>{this.state.team.id_equipe}</p>
                   <p>{this.state.team.nom_equipe}</p>
                   <p>{this.state.team.createdAt}</p>
                   <p>{this.state.team.updatedAt}</p>
                  
               </div>}
          
             <input type="text" value= {this.state.newName} onChange= {this.updateName}/><br/>
              <button onClick={()=>this.delete(id_equipe)}>Delete</button><br/>
              <button onClick={()=>this.update(nom_equipe)}>Modify</button>
             
                <button><a href="/Team">Back to Teams</a></button> 
            </div>
        );
    }
}

export default TeamDetails;