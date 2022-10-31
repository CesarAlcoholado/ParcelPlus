import React, {useState} from "react";
import Cv from "../../components/Cv/Cv.jsx";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenModal(true)}>ABRIR</button>
      <Cv open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  );
}
