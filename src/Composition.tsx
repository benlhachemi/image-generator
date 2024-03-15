// Imports
import {staticFile} from 'remotion'
import {z} from 'zod';

export const myCompSchema = z.object({
	text: z.string(),
});

export const MyComposition = ({text, bgImage, isBorder, border}: any) => {
	return (
		<>
			<div 
				className='w-full h-full bg-red-500 font-black text-7xl flex items-center justify-center bg-cover bg-center backdrop-blur-lg' 
				style={{background: `url(${staticFile(bgImage)})`}}
			>
				<h1 className="text-center px-14 leading-normal uppercase bg-black bg-opacity-30 text-yellow-400 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">{text}</h1>
			</div>

			{/* border */}
			{isBorder ? (
				<img className='absolute w-full h-full z-50' src={staticFile(border)} />
			) : ''}

			{/* WATERMARK */}
			<div className="absolute bottom-7 right-7 z-50 text-3xl font-medium text-white bg-black bg-opacity-50 py-4 px-9 -rotate-12 rounded-2xl shadow-lg">OMAR SLAOUI</div>
		</>
	);
};
