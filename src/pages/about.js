import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer";
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => {
	return (
		<React.Fragment>
		    <SEO title="Devesh Kumar - About" />
		    <Header />
		    <div className={"about"}>

		    </div>
		    <Footer />
		</React.Fragment>
	);
};

export default AboutPage;