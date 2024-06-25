"use client";
import {
  faComment,
  faHouseChimney,
  faMagnifyingGlass,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Add_button from "./Add_button";
import Nav_button from "./Nav_button";

function Phone_nav() {
  return (
    <nav className="flex h-16 w-full bg-zinc-200 rounded-t-lg justify-center items-center border-t border-slate-500">
      <ul className="flex flex-row justify-around items-center w-full">
        <li>
          <Nav_button
            currentPage={"HOME"}
            icon={
              <FontAwesomeIcon
                className="size-5 text-white"
                icon={faHouseChimney}
              />
            }
          />
        </li>
        <li>
          <Nav_button
            currentPage={"CHAT"}
            icon={
              <FontAwesomeIcon className="size-5 text-white" icon={faComment} />
            }
          />
        </li>
        <li>
          <Add_button
            icon={
              <FontAwesomeIcon
                className="size-8 stroke-black text-zinc-500"
                icon={faPlus}
              />
            }
          />
        </li>
        <li>
          <Nav_button
            currentPage={"RECHERCHE"}
            icon={
              <FontAwesomeIcon
                className="size-5 text-white"
                icon={faMagnifyingGlass}
              />
            }
          />
        </li>
        <li>
          <Nav_button
            currentPage={"PROFILE"}
            icon={
              <FontAwesomeIcon className="size-5 text-white" icon={faUser} />
            }
          />
        </li>
      </ul>
    </nav>
  );
}

export default Phone_nav;
