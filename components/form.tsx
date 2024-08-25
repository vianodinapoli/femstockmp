"use client";

import { useReducer } from "react";

export default function Form() {
  const formReducer = (state: any, event: { target: { name: any; value: any } }) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="grid lg:grid-cols-3 w-6/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="referencia"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Referência"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="designacao"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Designação"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="fisico"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Físico"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="primavera"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Primavera"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="armazem"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Armazém"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="unidade"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Unidade"
        />
      </div>

      <div className="form-check">
        <input
          type="radio"
          onChange={setFormData}
          value="Active"
          id="radioDefault1"
          name="status"
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        />
        <label htmlFor="radioDefault1" className="inline-block text-gray-800">
          Active
        </label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          onChange={setFormData}
          value="Inactive"
          id="radioDefault2"
          name="status"
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        />
        <label htmlFor="radioDefault2" className="inline-block text-gray-800">
          Inactive
        </label>
      </div>

      <hr />

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add
      </button>
    </form>
  );
}
