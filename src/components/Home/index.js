import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsListData()
  }

  getTeamCardsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const FilteredData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamCardsList: FilteredData, isLoading: false})
  }

  render() {
    const {isLoading, teamCardsList} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <>
            <div className="home-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo"
                alt="ipl logo"
              />
              <h1 className="home-title">IPL Dashboard</h1>
            </div>
            <div className="team-cards-container">
              {teamCardsList.map(eachCard => (
                <TeamCard key={eachCard.id} cardDetail={eachCard} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
