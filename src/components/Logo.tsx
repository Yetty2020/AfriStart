import LogoImg from "..assets/Logo.png"

const Logo: React.FC = () => {
  return(
    <div>
      <img src={LogoImg} alt="logo" className="w-10 h-10"/>
    </div>
  )
}

export default Logo;