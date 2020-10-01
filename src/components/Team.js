import React from 'react';

class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newTeam: "",
            teams : []
        }
    }
    
    handleChange = (e) => {
        console.log("event", e.target.name, e.target.value)
        let target = e.target;
        this.setState({
           newTeam: target.value
        })
        
    }

    submit = () => {
        let options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({nom_equipe: this.state.newTeam}) //the api need to know the name of the team 
        }
        let url = "http://localhost:3050/TEAMS";

        fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then((json) => {
            console.log(json.data)
            const updatedTeams = [...this.state.teams]
            updatedTeams.push(json.data)
            this.setState({
                teams : updatedTeams,
                newTeam : ""
            })
           
        })
    }

    async componentDidMount() {
        console.log("fetching")
        const response = await fetch('http://localhost:3050/TEAMS');
        const json = await response.json();
        this.setState({ teams: json.data })
        console.log("data", json.data)
    }

    

    redirect = (id) => {
        this.props.history.push('/team/' + id);
      }

    render() {
        console.log("teams", this.state.teams)
        return (
            <div>
                <ul>
                
                {this.state.teams && this.state.teams.map(team=>
                <li onClick={()=>this.redirect(team.id_equipe)}>{team.nom_equipe}
                </li>)}
                </ul>

                <input type="text" value={this.state.newTeam} onChange={this.handleChange}/><br/><br/>

                <button onClick={this.submit}>Add team</button><br/><br/>
                 <button><a href="/">Back to Home</a></button> 

            </div>
            
        );
    }
}

export default Team;