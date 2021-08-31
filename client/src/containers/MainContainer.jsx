import React from 'react'
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllRepairGuide, postRepairGuide, putRepairGuide, deleteRepairGuide } from '../services/repairGuide';
import { getAllElectronics, getElectronic} from '../services/electronicItems'
import CreateGuide from '../screens/CreateGuide.jsx'
import EditGuide from '../screens/EditGuide'
import Electronic from '../screens/Electronic'
import RepairGuides from '../screens/RepairGuidesDetail'
import RepairGuidesDetails from '../screens/RepairGuide'
import ElectronicDetail from '../screens/ElectronicDetail'

export default function MainContainer(props) {
  const [guides, setGuides] = useState([])
  const [electronics, setElectronics] = useState([]);
const [ electronic, setElectronic] = useState([])
  const { currentUser } = props;
  const history = useHistory()
  
  useEffect(() => {
    const fetchGuides = async () => {
      const getGuides = await getAllRepairGuide();
      setGuides(getGuides);
    };
    fetchGuides();
  }, []);  

  useEffect(() => {
    const fetchElectronics = async () => {
      const getElectronics = await getAllElectronics();
      setElectronics(getElectronics);
    };
    fetchElectronics();
  }, []);

  // useEffect(() => {
  //   const fetchElectronic = async () => {
  //     const getElectronic = await getElectronic()
  //     setElectronic(getElectronic);
  //   };
  //   fetchElectronic()
  // }, []);

  const handleCreate = async (formData) => {
    const guideData = await postRepairGuide(formData);
    setGuides((prevState) => [...prevState, guideData]);
    history.push('/repair_guides');
  };

  const handleUpdate = async (id, formData) => {
    const guideData = await putRepairGuide(id, formData);
    setGuides((prevstate) =>
      prevstate.map((repairGuide) => {
        return repairGuide.id === Number(id) ? guideData : repairGuide;
      })
    );
    history.push('/repair_guides');
  }

  const handleDelete = async (id) => {
    await deleteRepairGuide(id);
    setGuides((prevState) => prevState.filter((guides) => guides.id !== id));
  };


  return (
    <div>
      <Switch>
      <Route path='/repair_guides/new'>
          <CreateGuide handleCreate={handleCreate}
            currentUser={currentUser}
            guides={guides}
            electronics={electronics}  
                      />
        </Route>
        <Route path="/repair_guides/:id/edit">
          <EditGuide guides={guides} handleUpdate={handleUpdate}
                      currentUser={currentUser}
                      />
        </Route>
        <Route path='/repair_guides/:id'>
          <RepairGuidesDetails guides={guides} />

        </Route>
        <Route path='/repair_guides'>
          <RepairGuides RepairGuides={guides}
                                />
          
        </Route>
        <Route path='/electronics/'>
          <Electronic
            electronics={electronics}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/electronics/:id'>
          <ElectronicDetail
            guides={guides}
            electronic={electronic}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
