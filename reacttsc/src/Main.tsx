export interface Props {
	title: string;
	color?: string;
}

const Main = (props: Props) => {
	return (
		<header>
			<h1 style={{color:props.color? props.color: 'lightcoral'}}>{props.title}</h1>
		</header>
	);
};

export default Main;
