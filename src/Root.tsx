import {Still, random} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import './style.css';

function getRandomBg(): string {
  const randomIndex = Math.floor(random(null) * 39) + 1;
  return `/bg/${randomIndex}.jpg`;
}

function getRandomBorder(): string {
  const randomIndex = Math.floor(random(null) * 9) + 1;
  return `/borders/${randomIndex}.png`;
}

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Still
				id="MyComp"
				component={MyComposition}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					text: 'hello this is just a test sample text for image generation thank you so much',
					bgImage: getRandomBg(),
					border: getRandomBorder(),
					isBorder: Math.floor(random(null) * 2),
				}}
			/>
		</>
	);
};
