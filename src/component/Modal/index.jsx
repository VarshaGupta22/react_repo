import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./modal.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { setFormData, isEdit, onclose, oppen, inputData, setInputData } =
    props;

  function onchangeInputHandler(e) {
    console.log("Saved", e.target.value);
    const nameData = e.target.name;
    const valueData = e.target.value;
    setInputData((prevel) => {
      return { ...prevel, [nameData]: valueData };
    });
  }

  function SubmitHendler() {
    if (isEdit) {
      setFormData((prevel) => {
        const tempData = prevel.map((user) => {
          console.log("user", user.Candiate_name, inputData.Candiate_name);
          if (user.Candiate_name === inputData.Candiate_name) {
            return inputData;
          } else {
            return user;
          }
        });
        console.log("object", tempData);
        const data = JSON.stringify([...tempData]);
        console.log("38maodal", data);
        localStorage.setItem("candidate", data);
        return [...tempData];
      });
    } else {
      setFormData((prevel) => {
        const data = JSON.stringify([...prevel, inputData]);
        console.log("38maodal", data);
        localStorage.setItem("candidate", data);
        return [...prevel, inputData];
      });
    }
  }

  function notifyus() {
    if (isEdit) {
      toast.success("updated successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.success("created successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  return (
    <div>
      <Modal open={oppen} onClose={onclose} setEdit={true}>
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
                  disabled={isEdit ? true : false}
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
              <button
                className="items"
                onClick={() => {
                  SubmitHendler();
                  notifyus();
                }}
              >
                Save details
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
