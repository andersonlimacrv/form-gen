import React from 'react';

const HorizontalProgress = ({ value = 0, variant = 'one' }) => {
	// Função para obter o estilo de gradiente com base na variante
	const getGradientStyle = () => {
		switch (variant) {
			case 'one':
				return 'from-accent via-indigo-400 to-accent';
			case 'two':
				return 'from-green-400 via-blue-400 to-purple-500';
			case 'three':
				return 'from-yellow-300 via-red-400 to-yellow-300';
			case 'four':
				return 'from-pink-400 via-rose-300 to-cyan-400';
			default:
				return 'from-accent via-indigo-400 to-accent';
		}
	};

	return (
		<div className="w-full h-4 rounded-full bg-primary-foreground border-[1px] border-border">
			<div
				className={`h-4 py-1 bg-gradient-to-r ${getGradientStyle()} rounded-full`}
				style={{ width: `${value}%` }}
			/>
		</div>
	);
};

export default HorizontalProgress;
