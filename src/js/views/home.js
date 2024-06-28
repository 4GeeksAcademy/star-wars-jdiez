import React from "react";
import "../../styles/home.css";
import { CardComponent } from "../component/CardComponent";

export const Home = () => (
	<div className="text-center mt-5 container">
		<img className="mb-5" src="https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png"/>
		<CardComponent title={'hola'} info={'test'}/>

	</div>
);
