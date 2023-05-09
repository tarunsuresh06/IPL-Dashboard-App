import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetail} = props

  const {id, name, teamImageUrl} = cardDetail
  return (
    <Link className="team-card" to={`/team-matches/${id}`}>
      <li>
        <img src={teamImageUrl} className="team-card-img" alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
