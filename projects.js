function ProjectsCtrl($scope) {
	$scope.test = "Hello, World";
	$scope.items = [
		{
			title: "Labyrinth",
			imgurl: "/gfx/labyrinth_gui.png",
			linkurl: "https://github.com/SimonAnguish/Labyrinth",
			description: "A board game written in Java"
		},{
			title: "Map Generator",
			imgurl: "/gfx/map-generator_gui.png",
			linkurl: "https://github.com/SimonAnguish/Map-Generator",
			description: "A Map Generator written in Java"
		},{
			title: "Class Tracker",
			imgurl: "/gfx/default.jpg",
			linkurl: "https://github.com/SimonAnguish/Class-Edit-Tracker",
			description: "Tracks changes to UVM catalogue"
		}
	];
}