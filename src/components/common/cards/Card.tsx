import { FC, PropsWithChildren } from "react";

type CardProps = {
    Icon?: JSX.Element | string,
    title: string | JSX.Element,
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, Icon, title }) => {
    return (
        <div data-testid='Card' className="flex flex-col gap-3 p-4 border rounded-md border-gray-200 w-full">
            <>{!!Icon && Icon}</>
            <>{!!title && typeof title === 'string' && <h3 className="font-semibold text-lg">{title}</h3>}</>
            <>{!!title && typeof title != 'string' && title}</>
            <>{ children }</>
        </div>
    );
}