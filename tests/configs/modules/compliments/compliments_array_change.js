let config = {
	address: "0.0.0.0",
	ipWhitelist: [],
	timeFormat: 12,

	modules: [
		{
			module: "compliments",
			position: "middle_center",
			config: {
				updateInterval: 1000,
				random: true,
				compliments: {
					morning: ["Morning A", "Morning B"],
					afternoon: ["Afternoon A", "Afternoon B", "Afternoon C"],
					evening: ["Evening A"],
					anytime: ["Anytime A", "Anytime B"]
				}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}

