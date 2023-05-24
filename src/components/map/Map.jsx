import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from "react-simple-maps";
import features from "../../assets/features.json";
const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-15.0, -52.0, 0],
				center: [3, -7],
				scale: 1200,
			}}
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<Geographies
				geography={features}
				fill="#222f22"
				stroke="#FFFFFF"
				strokeWidth={1}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[31, 39.243322]}
				dx={-120}
				dy={-130}
				connectorProps={{
					stroke: "white",
					strokeWidth: 3,
					strokeLinecap: "round",
				}}
			>
				<text
					x="-22"
					textAnchor="end"
					alignmentBaseline="top"
					fill="white"
					fontSize={24}
				>
					{"Turkey"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
