import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./modal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Modala(props) {
  console.log("16 props fro modal from home", props);
  const { setFormData, onclose, oppen, inputData, setInputData } = props;
  // const [inputData, setInputData] = useState({
  //   Candiate_name: "",
  //   Candiate_email: "",
  //   Candiate_age: "",
  //   Candiate_contact: "",
  //   Candiate_gender: "",
  //   Candiate_address: "",
  // });

  function onchangeInputHandler(e) {
    console.log("Saved");
    const nameData = e.target.name;
    const valueData = e.target.value;
    setInputData((prevel) => {
      return { ...prevel, [nameData]: valueData };
    });
  }

  function SubmitHendler() {
    setFormData((prevel) => {
      const data = JSON.stringify([...prevel, inputData]);
      console.log("38maodal", data);
      localStorage.setItem("candidate", data);
      return [...prevel, inputData];
    });
  }

  return (
    <div>
      <Modal open={oppen} onClose={onclose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fill details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="conttainer">
              <h1>
                Name :{" "}
                <input
                  name="Candiate_name"
                  value={inputData.Candiate_name}
                  onChange={onchangeInputHandler}
                />
              </h1>
              <h1>
                Email :{" "}
                <input
                  name="Candiate_email"
                  value={inputData.Candiate_email}
                  onChange={onchangeInputHandler}
                />
              </h1>
              <h1>
                Age :{" "}
                <input
                  name="Candiate_age"
                  value={inputData.Candiate_age}
                  onChange={onchangeInputHandler}
                />
              </h1>
              <h1>
                Contact :{" "}
                <input
                  name="Candiate_contact"
                  value={inputData.Candiate_contact}
                  onChange={onchangeInputHandler}
                />
              </h1>
              <h1>
                Gender :{" "}
                <input
                  name="Candiate_gender"
                  value={inputData.Candiate_gender}
                  onChange={onchangeInputHandler}
                />
              </h1>
              <h1>
                Address :{" "}
                <input
                  name="Candiate_address"
                  value={inputData.Candiate_address}
                  onChange={onchangeInputHandler}
                />
              </h1>
            </div>

            <div>
              <button className="items" onClick={SubmitHendler}>
                Save details
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
