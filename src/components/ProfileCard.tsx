import { type Profile } from "./constants/Profile"

interface ProfileCardProps {
  member: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({member}) => {
  return (
    <div>
      <div>
        <img src={member.image} alt={member.name} />
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  )
}

export default ProfileCard
