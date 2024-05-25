import React from 'react';

export default function Hamburguer({ ...rest }) {
	return (
		<button className="relative group" {...rest}>
			{/* button container */}
			<div className="relative z-20 flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all dark:bg-[#243949] bg-muted-foreground ring-0 ring-gray-300 hover:ring-8 group-focus:ring-8 ring-opacity-30 duration-200 shadow-md">
				<div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
					<div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]" />
					<div className="bg-white h-[1px] rounded" />
					<div className="m-0 bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]" />
				</div>
			</div>
		</button>
	);
}
