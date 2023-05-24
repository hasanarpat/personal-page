import "./projects.scss";
import Pr1 from "../../assets/images/pr1.png";
import Pr2 from "../../assets/images/pr2.png";
import Pr3 from "../../assets/images/pr3.png";
import Pr4 from "../../assets/images/pr4.png";
import Pr5 from "../../assets/images/pr5.png";

const projects = [
	{
		img: Pr1,
		title: "Admin Dashboard",
		desc: "React router, Firebase Auth-Storage-Database, React Charts and MUI search optimized tables. Anything you can want from an admin panel",
    demo:"https://friendly-narwhal-c7e9f6.netlify.app/",
    src:""
	},{
		img: Pr5,
		title: "ThreeJS Portfolio",
		desc: "ThreeJS, EmailJS, GLB-GLTF objects and animation. A nice portfolio template",
    demo:"https://jolly-pony-e59a00.netlify.app/",
    src:"https://github.com/hasanarpat/react-portfolio-threejs"
	},{
		img: Pr2,
		title: "Netflix Clone",
		desc: "React router, Firebase Auth, a beatiful slider for continue to watch. React vide player and much.",
    demo:"https://app.netlify.com/sites/gilded-cupcake-b2f4ae/overview",
    src:"https://github.com/hasanarpat/Netflix-React-FirebaseAuth"
	},{
		img: Pr3,
		title: "An Event Ticket Page",
		desc: "An useful design for ticket selling companies.",
    demo:"https://coruscating-frangollo-8d8527.netlify.app/",
    src:"https://github.com/hasanarpat/m22-challenge"
	},{
		img: Pr4,
		title: "Who Wants to Be A Millionare",
		desc: "A clone of the program that everyone knows. True and false animations with toggle, sound and transiiton. A quiz app.",
    demo:"https://friendly-narwhal-c7e9f6.netlify.app/",
    src:"https://github.com/hasanarpat/basic-millionare-app"
	},
];
const Projects = () => {
	return (
		<div className="projects">
			<div className="wrapper">
				<span className="title">
					You can find my projects alive and source code of them here
				</span>
				<div className="gridContainer">
					{
            projects.map(item=>
              <div className="card">
						<div className="line">
							<div className="dot dotOne"></div>
							<div className="dot dotTwo"></div>
							<div className="dot dotThree"></div>
						</div>
						<img alt="website" src={item.img} />
						<div className="desc">
							<span>{item.title}</span>
							<p>
								{item.desc}
							</p>
							<a className="link" href={item.demo} target="_blank">
								For live product
							</a>
							<a className="link" href={item.src} target="_blank">
								Source code
							</a>
						</div>
					</div>
            )
          }
				</div>
			</div>
		</div>
	);
};

export default Projects;
