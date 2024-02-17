import { useState } from "react";
import { IoReorderThree, IoCloseSharp } from "react-icons/io5";

export function Dropdowns() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="sm:hidden p-3 text-4xl flex justify-evenly items-center text-[#00C4FF] hover:text-[#e89429]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (<IoReorderThree />) : (<IoCloseSharp />)}
        
      </button>
      {!isOpen ? (
        <div className="hidden"></div>
      ) : (
        <nav
          class="w-full sm:w-auto"
          id="navbar-dropdown"
        >
          <ul class="flex items-end justify-evenly sm:flex-row flex-col sm:p-0">
            <li>
              <a
                id="planes"
                href="/planes"
                class="mx-6 font-bold text-[#00C4FF] hover:underline block py-2">Planes
              </a>
            </li>
            <li>
              <a
                id="atencion-cliente"
                href="/atencion-cliente"
                class="mx-6 font-bold text-[#00C4FF] hover:underline block py-2"
                >Atencion al Cliente
              </a>
            </li>
            {/* <li><a id="portal-pago" href="/login" class="mx-6 font-extrabold hover:underline">Portal de Pago</a></li> */}
          </ul>
        </nav>
      )}
    </>
  );
}
