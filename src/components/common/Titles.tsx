import { FC, PropsWithChildren } from "react";

export const TitleH2: FC<PropsWithChildren<{}>> = ({ children }) => {
    return <h2 className="text-xl font-semibold">
        { children }
    </h2>
}