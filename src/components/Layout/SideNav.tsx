import { FC, useRef } from "react";
import { useMobileContext } from "../../store";
import { useOnClickOutside } from "../../utils/hooks/useOnOutsideClick";

export const SideNav: FC = () => {
    const { leftBarVisible, setLeftBarVisible } = useMobileContext();
    const containerRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(containerRef, () => leftBarVisible && setLeftBarVisible(false));
	const cssClass = leftBarVisible ? 'left-0 transition-all-medium' : '-left-full transition-all-medium';
    const buttonClass = 'bg-primary-light-2 p-1 w-full text-center rounded-full';

    return (
        <div 
            ref={containerRef}
            data-testid='SideNav' 
            className={"flex bg-primary-light z-10 flex-col gap-4 p-6 h-full md:rounded-xl md:static fixed top-0 shadow-light "+cssClass}
        >
            <div className="flex flex-col gap-3 items-center w-full">
                <div className="h-44 w-44 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://www.dalveersidhu.com/img/me.jpg" alt="Profile image"></img>
                </div>
                <h2 title="Name" className="font-semibold text-2xl">Dalveer Singh</h2>
                <p title="Role" className={buttonClass}>Full Stack Developer</p>
                <button className={buttonClass+" text-primary"}>Download Resume</button>
            </div>
            <div className="flex flex-col gap-2 bg-primary-light-2 py-3 px-4 w-full rounded-lg text-primary">
                <a href="mailto:dalveersidhu97@gmail.com" title="Email address">dalveersidhu97@gmail.com</a>
                <a href="tel:+19029880900" title="Phone number">+19029880900</a>
                <address title="Address">Brampton, ON</address>
            </div>
            <div className="flex justify-between mt-auto w-full text-primary gap-4">
                <a>LinkedIn</a>
                <a>Github</a>
                <a>Facebook</a>
            </div>
        </div>
    );
}