
// TODO: Write Test Cases

import { useMobileContext } from "../../store";
import { RxHamburgerMenu } from 'react-icons/rx';

export const MobileHeader = () => {
    const { setLeftBarVisible, setRightBarVisible } = useMobileContext();
    return (
        <div data-testid='MobileHeader' className="flex md:hidden gap-3 items-center justify-between shadow-light text-white bg-primary">
            <div className="flex gap-3 items-center p-3" onClick={() => setLeftBarVisible(true)}>
                <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden flex justify-center items-center text-2xl text-white">
                  <img className="w-full h-full object-cover" src="https://www.dalveersidhu.com/img/me.jpg" alt="Profile image"></img>
                </div>
                <div className="flex flex-col gap-[.1rem]">
                    <h1 className="font-semibold" title="Person name">Dalveer Singh</h1>
                    <div className="text-xs" title="Role">Full Stack Developer</div>
                </div>
            </div>
            <div className="p-3" onClick={() => setRightBarVisible(true)}><RxHamburgerMenu size={38} style={{ strokeWidth: '.6' }}></RxHamburgerMenu></div>
        </div>
    );
}