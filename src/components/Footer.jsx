import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>The Company</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Help</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Press</FooterLink>
			<FooterLink href="#">Team</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
		</Column>
		<Column>
			<Heading>More Information</Heading>
			<FooterLink href="#">Payment & security</FooterLink>
			
			<FooterLink href="#">Terms Of Use</FooterLink>
			<FooterLink href="#">Terms Of Offer + Sale</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">Visit Us</FooterLink>
		
		</Column>
		<Column>
			<Heading>We Accept</Heading>
		
				<FooterLink><img src="/img/WhatsApp Image 2022-03-22 at 16.53.26.jpeg"></img></FooterLink>
	
			
		</Column>
		<Column>
		    <Heading>Contact Us</Heading>
			<FooterLink>9314226135</FooterLink>
			<FooterLink>ijeras.in@gmail.com</FooterLink>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<FontAwesomeIcon icon={faYoutube} size="1.5x" />
			<FontAwesomeIcon icon={faFacebook} size="1.5x" />
			<FontAwesomeIcon icon={faTwitter} size="1.5x" />
			<FontAwesomeIcon icon={faInstagram} size="1.5x" />
			</FooterLink>
			
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
