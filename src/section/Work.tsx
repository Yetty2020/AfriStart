import ProfileCard from "../components/ProfileCard";
import { ProfileData } from "../components/constants/Profile";

function Work() {
  return (
    <div>
      <h1>The Women behind the work</h1>
      <div>
        {ProfileData.map((member) => (
          <ProfileCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Work;
