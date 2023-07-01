import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import TableData from "../Table";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [inputData, setInputData] = useState({
    Candiate_name: "",
    Candiate_email: "",
    Candiate_age: "",
    Candiate_contact: "",
    Candiate_gender: "",
    Candiate_address: "",
  });

  const [formData, setFormData] = useState([]);
  function openModelHandeler() {
    setOpen(true);
  }

  function onclose() {
    setOpen(false);
  }
  console.log("15 formData from home page", inputData);
  function onComponentMount() {
    const data = localStorage.getItem("candidate");
    const orginalDataforTable = JSON.parse(data);
    console.log("19 onmount data from dom", data);
    console.log("20 orginalDataforTable", orginalDataforTable);
    if (data) {
      setFormData([...orginalDataforTable]);
    }
  }

  useEffect(onComponentMount, []);

  return (
    <div className="container">
      <button
        onClick={() => {
          openModelHandeler();
          setIsEdit(false);
        }}
        className="items"
      >
        Create
      </button>

      <Modal
        oppen={open}
        isEdit={isEdit}
        onclose={onclose}
        setFormData={setFormData}
        inputData={inputData}
        setInputData={setInputData}
      />
      <TableData
        FormData={formData}
        setFormData={setFormData}
        setInputData={setInputData}
        setOpen={setOpen}
        setIsEdit={setIsEdit}
      />
      <ToastContainer />
    </div>
  );
}
