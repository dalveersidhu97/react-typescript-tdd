import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMobileContext } from "../../store";
import { useOnClickOutside } from "../../utils/hooks/useOnOutsideClick";

const TOP_NAV_ROUTE = [
  { path: "/", lable: "About" },
  { path: "/skills", lable: "Skills" },
  { path: "/experience", lable: "Experience" },
  { path: "/resume", lable: "Resume" },
];

export const TopNav = () => {
  const { rightBarVisible, setRightBarVisible } = useMobileContext();
	const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
	const containerRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(containerRef, () => rightBarVisible && setRightBarVisible(false));
	const cssClass = rightBarVisible ? 'right-0' : '-right-full';

  return (
    <div
			ref={containerRef}
      className={"flex text-primary text-xl flex-col justify-center gap-8 shadow-md px-10 py-2 fixed top-0 "+cssClass+" transition-all-medium bg-white h-full md:h-auto md:justify-start md:flex-row md:gap-4 md:shadow-none md:px-4 md:static"}
      data-testid="TopNav"
    >
      {TOP_NAV_ROUTE.map((navRoute) => (
        <Link
					key={navRoute.path}
          to={navRoute.path}
					title={navRoute.lable}
          className={`px-6 py-1 border-b-2 ${
            isActive(navRoute.path) ? "border-primary" : "border-transparent"
          }`}
        >
          {navRoute.lable}
        </Link>
      ))}
    </div>
  );
};
