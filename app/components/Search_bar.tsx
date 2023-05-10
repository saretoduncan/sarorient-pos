import { BiSearchAlt2 } from "react-icons/bi";

export default function Search_bar() {
  return (
    <>
      <div className="flex space-x-1">
        <div>
          <input
            type="text"
            placeholder="search product by code or name"
            className="shadow-lg  focus:outline-none rounded-3xl focus:ring focus:ring-gray-100 ps-3 w-[300px]"
          />
        </div>
        <div>
          <button className="text-xl self-center p-1 text-white">
            <BiSearchAlt2 />
          </button>
        </div>
      </div>
    </>
  );
}
