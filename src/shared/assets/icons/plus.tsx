import { SVGAttributes } from 'react';

interface PlusIconProps extends SVGAttributes<SVGElement>{
    className?: string;
};

const PlusIcon = (props: PlusIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 32 32'
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M28 16a1 1 0 0 1-1 1H17v10a1 1 0 0 1-2 0V17H5a1 1 0 0 1 0-2h10V5a1 1 0 0 1 2 0v10h10a1 1 0 0 1 1 1Z"
        />
    </svg>
)
export default PlusIcon