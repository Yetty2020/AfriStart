import { type ValuesDataType
 } from "./constants/ValuesData"

 interface ValuesCardProps{
  item: ValuesDataType;
  index: number;
 }

function ValuesCard({item, index} : ValuesCardProps) {
  return (
    <div key={index}>
      <span>{item.icon}</span>
      <p>{item.title}</p>
      <p>{item.description}</p>
      
    </div>
  )
}

export default ValuesCard
