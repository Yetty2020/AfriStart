import LogoImg from "../assets/whiteLogo.png"

const Logo: React.FC = () => {
  return(
    <div>
      <img src={LogoImg} alt="logo" className="w-35 h-35"/>
    </div>
  )
}

export default Logo;