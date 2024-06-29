import { CardComponent } from "../component/CardComponent";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicle:[],
			planets:[]
		},
		actions: {
			fetchPeople: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ people: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchVehicle: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ vehicle: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchPlanets: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ planets: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
		}
	};
};

export default getState;
