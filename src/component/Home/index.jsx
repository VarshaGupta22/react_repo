import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import TableData from "../Table";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  function openModelHandeler() {
    setOpen(true);
  }
  const [inputData, setInputData] = useState({
    Candiate_name: "",
    Candiate_email: "",
    Candiate_age: "",
    Candiate_contact: "",
    Candiate_gender: "",
    Candiate_address: "",
  });

  function onclose() {
    setOpen(false);
  }
  console.log("15 formData from home page", formData);
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
        }}
        className="items"
      >
        Create
      </button>

      <Modal
        oppen={open}
        onclose={onclose}
        setFormData={setFormData}
        inputData={inputData}
        setInputData={setInputData}
      />
      <TableData
        FormData={formData}
        setFormData={setFormData}
        setInputData={setInputData}
      />
    </div>
  );
}
