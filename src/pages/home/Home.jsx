import "./home.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
const Home = () => {
	return (
		<div className="home">
			<div className="top">
				<h1>Hello!</h1>
				<h2>I'm a Web developer.</h2>
				<span>An autodidactic learner and developer.</span>
				<p>
					I’m currently developing apps with ReactJS and NodeJS if I need. I'm
					open to any internship offers.
				</p>
        
      <span ><a href="/projects">See my projects</a><GitHubIcon className="icon"/></span>
      <span ><a href="https://hasanarpat.github.io/" target="_blank">My blog</a><BookIcon className="icon"/></span>
       
			</div>
			<div className="bottom">
				<div className="left">
					<span>Some of libraries and tools that i use :</span>
					<ul>
						<li>React Router</li>
						<li>NextJS</li>
						<li>Styled Components</li>
						<li>SASS-SCSS</li>
						<li>MUI</li>
						<li>Firebase</li>
						<li>ThreeJS</li>
						<li>MongoDB</li>
					</ul>
				</div>
				<div className="right">
					<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
							alt="react"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://sass-lang.com" target="_blank" rel="noreferrer">
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
							alt="sass"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
							alt="javascript"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
							alt="bootstrap"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a
						href="https://www.w3schools.com/css/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
							alt="css3"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://expressjs.com" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
							alt="express"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a
						href="https://firebase.google.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
							alt="firebase"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://babeljs.io/" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
							alt="babel"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
							alt="html5"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://jekyllrb.com/" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg"
							alt="jekyll"
							width="40"
							height="40"
						/>{" "}
					</a>{" "}
					<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
							alt="mongodb"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
							alt="mysql"
							width="40"
							height="40"
						/>{" "}
					</a>{" "}
					<a href="https://nodejs.org" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
							alt="nodejs"
							width="40"
							height="40"
						/>{" "}
					</a>
					<a href="https://postman.com" target="_blank" rel="noreferrer">
						{" "}
						<img
							src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
							alt="postman"
							width="40"
							height="40"
						/>{" "}
					</a>
				</div>
			</div>
      <span className="link"><a href="https://www.linkedin.com/in/hasan-arpat-4ba6a3218/" target="_blank">Contact me on linkedin</a><LinkedInIcon className="icon"/></span>
		</div>
	);
};

export default Home;
