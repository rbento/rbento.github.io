const galleryItems = [
	[
		{
			src: "assets/images/red-sector-a/red-sector-a-01.png",
			title: "A 3D tower defense game demo<small>Red Sector A (C#, Unity)</small>",
		},
		{
			src: "assets/images/red-sector-a/red-sector-a-02.png",
			title: "Ray towers attacking enemies in range<small>Red Sector A (C#, Unity)</small>",
		},
		{
			src: "assets/images/red-sector-a/red-sector-a-03.png",
			title: "All elements of a complete game<small>Red Sector A (C#, Unity)</small>",
		},
		{
			src: "assets/images/red-sector-a/red-sector-a-04.png",
			title: "A* path finding<small>Red Sector A (C#, Unity)</small>",
		},
		{
			src: "assets/images/red-sector-a/red-sector-a-05.png",
			title: "Clean project organization<small>Red Sector A (C#, Unity)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=GtyTj3LcjBY",
			title: "YouTube<small>Red Sector A (C#, Unity)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/star-ocean/star-ocean-01.png",
			title: "DebugDraw allows for easy math vector visualization<small>Star Ocean (C#, XNA)</small>",
		},
		{
			src: "assets/images/star-ocean/star-ocean-02.png",
			title: "Game Start sequence utilizes the Arrive steering behavior<small>Star Ocean (C#, XNA)</small>",
		},
		{
			src: "assets/images/star-ocean/star-ocean-03.png",
			title: "Ships fly through space by inertia, following their linear momentum<small>Star Ocean (C#, XNA)</small>",
		},
		{
			src: "assets/images/star-ocean/star-ocean-04.png",
			title: "Scene management with transition effects<small>Star Ocean (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=cAAxThfsJ2Q",
			title: "YouTube<small>Star Ocean (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/raven-attack/raven-attack-01.png",
			title: "Visualizing math vectors through DebugDraw<small>Raven Attack (C#, XNA)</small>",
		},
		{
			src: "assets/images/raven-attack/raven-attack-02.png",
			title: "Raven movement is powered by Steering Behaviors (wander, flee, seek)<small>Raven Attack (C#, XNA)</small>",
		},
		{
			src: "assets/images/raven-attack/raven-attack-03.png",
			title: "Bombs have random weight and fall due to gravity<small>Raven Attack (C#, XNA)</small>",
		},
		{
			src: "assets/images/raven-attack/raven-attack-04.png",
			title: "Scene management with transition effects<small>Raven Attack (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=LFwflhdiSIM",
			title: "YouTube<small>Raven Attack (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/ai-pong/ai-pong-01.png",
			title: "Demonstrates autonomous behavior through State Machines, Embedded Scripting and Math<small>AI Pong (C#, XNA)</small>",
		},
		{
			src: "assets/images/ai-pong/ai-pong-02.png",
			title: "Current bot state is visible<small>AI Pong (C#, XNA)</small>",
		},
		{
			src: "assets/images/ai-pong/ai-pong-03.png",
			title: "Raycast determines the coordinate a bot should go to intercept the ball<small>AI Pong (C#, XNA)</small>",
		},
		{
			src: "assets/images/ai-pong/ai-pong-04.png",
			title: "Bot logic is implemented via an external script which is then called from C#<small>AI Pong (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=b5Lgl2dkx64",
			title: "YouTube<small>AI Pong (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/crazy-maze/crazy-maze-01.png",
			title: "A 2D mini-game<small>Crazy Maze (C#, XNA)</small>",
		},
		{
			src: "assets/images/crazy-maze/crazy-maze-02.png",
			title: "10 seconds to cross the maze<small>Crazy Maze (C#, XNA)</small>",
		},
		{
			src: "assets/images/crazy-maze/crazy-maze-03.png",
			title: "Per-pixel collision with the mouse pointer position against a black/white texture mask<small>Crazy Maze (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=ojnamei2-Qk",
			title: "YouTube<small>Crazy Maze (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/ballz-n-cupz/ballz-n-cupz-01.png",
			title: "A 2D mini-game<small>Ballz 'n Cupz (C#, XNA)</small>",
		},
		{
			src: "assets/images/ballz-n-cupz/ballz-n-cupz-02.png",
			title: "10 seconds to find the ball<small>Ballz 'n Cupz (C#, XNA)</small>",
		},
		{
			src: "assets/images/ballz-n-cupz/ballz-n-cupz-03.png",
			title: "Object-oriented approach<small>Ballz 'n Cupz (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=AqFTpbkKTjU",
			title: "YouTube<small>Ballz 'n Cupz (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/paper-cannon/paper-cannon-01.png",
			title: "Game elements like banner sequence, charging shots, lifebar and bullet selection<small>Paper Cannon (C#, XNA)</small>",
		},
		{
			src: "assets/images/paper-cannon/paper-cannon-02.png",
			title: "Paper ball trajectory is affected by forces like gravity and wind<small>Paper Cannon (C#, XNA)</small>",
		},
		{
			src: "assets/images/paper-cannon/paper-cannon-03.png",
			title: "Scene management with transition effects<small>Paper Cannon (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=oHEJ6jUg94U",
			title: "YouTube<small>Paper Cannon (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/woops-ex/woops-ex-01.png",
			title: "Simple game mechanics<small>Woops! Ex (C#, XNA)</small>",
		},
		{
			src: "assets/images/woops-ex/woops-ex-02.png",
			title: "AABB collision detection<small>Woops! Ex (C#, XNA)</small>",
		},
		{
			src: "assets/images/woops-ex/woops-ex-03.png",
			title: "Scene management with transition effects<small>Woops! Ex (C#, XNA)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=lyHsgySPR1w",
			title: "YouTube<small>Woops! Ex (C#, XNA)</small>",
			type: "iframe"
		}
	],
	[
		{
			src: "assets/images/ballz-n-cupz-ios/ballz-n-cupz-ios-01.png",
			title: "Native iOS game with Objective-C and Cocos2D<small>Ballz n' Cupz (Objective-C, iOS)</small>",
		},
		{
			src: "assets/images/ballz-n-cupz-ios/ballz-n-cupz-ios-02.png",
			title: "A 2D mini-game<small>Ballz n' Cupz (Objective-C, iOS)</small>",
		},
		{
			src: "assets/images/ballz-n-cupz-ios/ballz-n-cupz-ios-03.png",
			title: "10 seconds to find the ball<small>Ballz n' Cupz (Objective-C, iOS)</small>",
		},
		{
			src: "assets/images/ballz-n-cupz-ios/ballz-n-cupz-ios-04.png",
			title: "Object-oriented approach<small>Ballz n' Cupz (Objective-C, iOS)</small>",
		}
	],
	[
		{
			src: "assets/images/qubz-console/qubz-console-01.png",
			title: "A simple puzzle game for the Windows Console<small>Qubz Console (C++)</small>",
		},
		{
			src: "assets/images/qubz-console/qubz-console-02.png",
			title: "Use of a screen buffer to reduce flickering<small>Qubz Console (C++)</small>",
		},
		{
			src: "assets/images/qubz-console/qubz-console-03.png",
			title: "Object-oriented approach<small>Qubz Console (C++)</small>",
		},
		{
			src: "assets/images/qubz-console/qubz-console-04.png",
			title: "Game state management<small>Qubz Console (C++)</small>",
		},
		{
			src: "assets/images/qubz-console/qubz-console-05.png",
			title: "Scene management<small>Qubz Console (C++)</small>",
		},
		{
			src: "https://www.youtube.com/watch?v=sYxnB48sPLM",
			title: "YouTube<small>Qubz Console (C++)</small>",
			type: "iframe"
		}
	],
];

$(document).ready(function () {
	for (let galleryIndex = 0; galleryIndex < galleryItems.length; galleryIndex++) {
		let gallery = $("#gallery-" + galleryIndex);
		gallery.magnificPopup({
			items: galleryItems[galleryIndex],
			tLoading: "Loading #%curr%...",
			mainClass: "mfp-img-mobile",
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: "<a href='%url%'>The image #%curr%</a> could not be loaded."
			}
		});
	}
});
