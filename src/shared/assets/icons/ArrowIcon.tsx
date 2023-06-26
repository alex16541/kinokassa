import { SVGAttributes } from 'react';

interface ArrowIconProps extends SVGAttributes<SVGElement>{
    className?: string;
};

const ArrowIcon = (props: ArrowIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 32 32'
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            // eslint-disable-next-line max-len
            d="M12 30.333h8c7.24 0 10.333-3.093 10.333-10.333v-8C30.333 4.76 27.24 1.667 20 1.667h-8C4.76 1.667 1.667 4.76 1.667 12v8c0 7.24 3.093 10.333 10.333 10.333ZM3.667 12c0-6.147 2.186-8.333 8.333-8.333h8c6.147 0 8.333 2.186 8.333 8.333v8c0 6.147-2.186 8.333-8.333 8.333h-8c-6.147 0-8.333-2.186-8.333-8.333v-8Zm11.626 7.587c.2.2.454.293.707.293a.99.99 0 0 0 .707-.293l4.706-4.707a1.006 1.006 0 0 0 0-1.413 1.006 1.006 0 0 0-1.413 0l-4 4-4-4a1.006 1.006 0 0 0-1.413 0 1.006 1.006 0 0 0 0 1.413l4.706 4.707Z"
            clipRule="evenodd"
        />
    </svg>
)
export default ArrowIcon