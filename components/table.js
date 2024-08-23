import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json'
export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-12" py-2>
            <span className="text-gray-300">Referência</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Designação</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Fisico</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Primavera</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Armazém</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Unidade</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Status</span>
          </th>
          <th className="px-12" py-2>
            <span className="text-gray-300">Ações</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
      {
        data.map((obj,i) => <Tr{...obj} key={i}/>)
      }

      </tbody>
    </table>
  );
}

function Tr({referencia, designacao, fisico, primavera, armazem, unidade, status}){
  return (
    <tr className="bg-gray-50 text-center">
    <td className="px-16 py-2 flex flex-row item-center">
      <img src="#" alt="" />
      <span className="text-center ml-2 font-semibold">{referencia || "N/A"}</span>
    </td>

    <td className="px-12 py-2">
      <span>{designacao || "N/A"}</span>
    </td>
    <td className="px-12 py-2">
      <span>{fisico || "N/A"}</span>
    </td>
    <td className="px-12 py-2">
      <span>{primavera || "N/A"}</span>
    </td>
    <td className="px-12 py-2">
      <span>{armazem || "N/A"}</span>
    </td>
    <td className="px-12 py-2">
      <span>{unidade || "N/A"}</span>
    </td>
    <td className="px-12 py-2">
      <button className="cursor">
        {" "}
        <span className="bg-green-500 text-white px-5 py-1 rounded-full">
        {status || "N/A"}
        </span>
      </button>
    </td>

    <td className="px-12 py-2 flex justify-around gap-5">
      <button className="cursor">
        <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
      </button>
      <button className="cursor">
        <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
      </button>
    </td>
  </tr>
  )
}
