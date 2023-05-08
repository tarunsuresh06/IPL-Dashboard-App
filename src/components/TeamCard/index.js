import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetail} = props

  const {id, name, teamImageUrl} = cardDetail
  return (
    <Link className="team-card" to={`/team-matches/${id}`}>
      <img src={teamImageUrl} className="team-card-img" alt={name} />
      <h1 className="team-card-name">{name}</h1>
    </Link>
  )
}

export default TeamCard
