import { SVGAttributes } from 'react';

interface MinusIconProps extends SVGAttributes<SVGElement>{
    className?: string;
};

const MinusIcon = (props: MinusIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 32 32'
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Z"
        />
    </svg>
)
export default MinusIcon