import { BiCheck } from "react-icons/bi";

export default function Bug({message}) {
    return (
        <div className="Bug container mx-auto">
            <div className="flex justify-center mx-full border border-red-300 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
               {message} <BiCheck size={25} color={"rgb(244,63,94)"}></BiCheck>
            </div>
        </div>
    );
}
