 import { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import { getOneRepairGuide } from '../services/repairGuide';

 export default function RepairGuide(props) {
console.log(props)
   const [guides, setGuides] = useState(null);
   const { id } = useParams();

   useEffect(() => {
     const fetchRepairGuide = async (id) => {
       const guideData = await getOneRepairGuide(id)
       setGuides(guideData)
     }
     fetchRepairGuide();
   }, [id]);

   return (
     <div>
       <h3>{guides?.title }</h3>
       {guides?.product.map((electronic) => (
         <p key={electronic?.id}>
           
           {electronic?.steps}</p>
       ))}
       <form>

       </form>
     </div>
   )}


   