// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOneRepairGuide } from '../services/repairGuide';

// export default function RepairGuideDetail(props) {

//   const [guides, setGuides] = useState(null);
//   const { id } = useParams();
//   const {electronics} = props

//   useEffect(() => {
//     const fetchRepairGuide = async () => {
//       const guideData = await getOneRepairGuide(id)
//       setGuides(guideData)
//     }
//     fetchRepairGuide();
//   }, [id]);

//   return (
//     <div>
//       <h3>{guides?.title }</h3>
//       {guides?.electronics.map((electronics) => {
//         <p key={electronic.id}>{electronic.id}</p>
//       })}
//       <form>

//       </form>
//     </div>
//   )}

 {/* <h2>{electronics.title}</h2>
      
      <br />
      <img src={electronics?.image} alt="device"></img>
      <br />
      <p>{electronics?.steps}</p> */}

      import React from 'react'
      
      export default function RepairGuideDetail() {
        return (
          <div>
            
          </div>
        )
      }
      