import React from 'react';
import Team from './Team'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams : []
        }

    }

    // handleClick = () => {
    //     this.setState({
    //         teams: this.state.teams
    //     })
    //     console.log();
    // }

    redirect = () => {
        let teams = this.state.teams;
        this.props.history.push('/team/' + teams);
      }

     render() {
        return (
          <div >
              <button type="button" onClick={this.redirect}>Team Manager</button>

              {/* {
                    this.state.teams.map((team, i) => {
                        return <Team redirect={this.redirect} teams= {team.nom_equipe}/>
                    })
                } 
               */}
          </div>
        );
    }
}

export default Home;










// componentDidMount() {
       
    //         // GET request using fetch with set headers
    //         const headers = { 'Content-Type': 'application/json' }
    //         fetch('https://myteammanager.herokuapp.com/TEAMS', { headers })
    //             .then(response => response.json())
    //             .then(data => this.setState({ nom_equipe: data.data}));
    //             console.log()
    