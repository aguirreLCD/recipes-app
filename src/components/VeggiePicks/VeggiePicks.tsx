import Image from "next/image";
import { useContext, useState } from "react";
import { SearchContext } from "../SearchProvider/SearchProvider";

interface veggieTypes {
  id: string;
  title: string;
  sourceUrl: string;
}

interface dataTypes {
  data: veggieTypes[] | null;
  error: object | null;
}

export default function VeggiePicks(props: veggieTypes) {
  // const { search, setSearch } = useContext(SearchContext);
  // const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   if (active) {
  //     setSearch("");
  //   } else {
  //     setSearch(props.id);
  //   }
  //   setActive(!active);
  // };

  return (
    // <button
    //   className={`block w-full max-w-[160px] ${
    //     active ? "border-4 border-primary-purple scale-110" : ""
    //   }`}
    //   onClick={handleClick}
    // >

    //   {/* <Image
    //     src={props.image}
    //     alt={`${props.title}`}
    //     width={310}
    //     height={330}
    //     className="object-fill w-full"

    //   /> */}

    // </button>

    <ul>
      <li className="bg-primary-black text-white h-[35px] flex items-center justify-center">
        <a href={props.sourceUrl} target="_blank">
          {" "}
          {props.title}{" "}
        </a>
      </li>
    </ul>
  );
}
