import React from "react";
import { ImEarth } from "react-icons/im";
import Link from "next/link";

const LinkEng = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    history.back();
  };

  return (
    <Link href="/indexEng" onClick={handleClick} passHref>
      <ImEarth />
    </Link>
  );
};

export default LinkEng;
