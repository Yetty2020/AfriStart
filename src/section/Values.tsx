import {ValuesData }from "../components/constants/ValuesData"
import ValuesCard from "../components/ValuesCard";


function Values() {
  return (
   <section>

     <span className="">What We stand for</span>
        <h1>Our Values</h1>
        <div>
      {ValuesData.map((item, index) => (
        <ValuesCard key={item.id} item={item} index={index} />
      ))}
    </div>

   </section>
  );
}

export default Values;
