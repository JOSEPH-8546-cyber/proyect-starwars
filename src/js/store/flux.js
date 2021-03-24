const getState = ({ getStore, setStore }) => {
	return {
		store: {
			Planets: null,
			PlanetsDetails: null,
			Characters: null,
			CharactersDetails: null,
			Starships: null,
			StarshipsDetails: null,
			Favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPlanets: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => setStore({ Planets: response }));
			},
			PlanetsInfo: theid => {
				fetch("https://www.swapi.tech/api/planets/" + theid)
					.then(response => response.json())
					.then(response => setStore({ PlanetsDetails: response.result }));
			},
			loadCharacters: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => setStore({ Characters: response }));
			},
			CharactersInfo: theid => {
				fetch("https://www.swapi.tech/api/people/" + theid)
					.then(response => response.json())
					.then(response => setStore({ CharactersDetails: response.result }));
			},
			loadStarships: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => setStore({ Starships: response }));
			},
			StarshipsInfo: theid => {
				fetch("https://www.swapi.tech/api/starships/" + theid)
					.then(response => response.json())
					.then(response => setStore({ StarshipsDetails: response.result }));
			},
			addFavorites: Like => {
				setStore({ Favorites: getStore().Favorites.concat(Like) });
			},
			delete: itemToDelete => {
				setStore({
					Favorites: getStore().Favorites.filter(item => {
						return itemToDelete.uid !== item.uid;
					})
				});
			}
		}
	};
};
export default getState;
