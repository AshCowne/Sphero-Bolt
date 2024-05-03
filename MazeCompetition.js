// Programmer: Lauryn Meyer
// Team Member: Ash Cowne
// Bolt ID: SB-CF6D
// Date: 4-30-2024
// Program: Maze Competition Course
// Program URL:https://edu.sphero.com/program/16788336/edit

async function startProgram() {
	// Programer: Ash Cowne - Start Text & Audio Checkpoint Commit - Date: 4.30.2024
	await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 90, true)
	await delay(1)
	await speak("Start", true);
	

	// Programmer: Lauryn Meyer - Blue LED Checkpoint Commit - Date: 5.1.2024

	await roll((getHeading() + 0), 75, 2);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 100 });

// Programer: Ash Cowne  - Sound One Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 77,1.4);
	await delay(1);
	await Sound.Effects.Fairy.play()
	
	// Programmer: Lauryn Meyer - Red LED Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 80,0.8);
	await delay(1);
	await roll((getHeading() + 40),70,1);
	await delay(1);
	setMainLed({ r: 100, g: 0, b: 0 });
	await delay(1);
	

	// Programer: Ash Cowne - Sound Two Checkpoint Commit - Date: 5.2.2024
	await roll((getHeading() - 90), 70,0.6);
	await delay(1);
	await roll((getHeading() - 90), 75,1);
	await delay(1);
	await roll((getHeading() + 90), 60,0.7);
	await Sound.Effects.Fireworks.play()
	
	// Programmer: Lauryn Meyer - Green LED Checkpoint Commit - Date: 5.2.2024
	await delay (1);
	await roll((getHeading() + 0), 75,0.4);
	await delay(1);
	await roll((getHeading() + 90), 75,.5);
	await delay(1);  
	await roll((getHeading() - 90), 70,0.4);
	setMainLed({ r: 0, g: 100, b: 0 });

	// Programer: Ash Cowne - Purple LED & Sound Three Checkpoint Commit - Date:
	await delay(1);
	await roll((getHeading() + 0), 60,0.2);
	await delay(1);
	await roll((getHeading() - 90), 75,1);
	await delay(1);
	await roll((getHeading() - 45), 60,0.7);
	await roll((getHeading() + 45), 60,0.5);

	setMainLed({ r: 50, g:0, b: 50 });
	await Sound.Effects.JokeDrum.play()




	// Programer: - Finish Text & Audio Checkpoint Commit - Date:



}
// Programmer: Lauryn Meyer
// Team Member: Ash Cowne
// Bolt ID: SB-CF6D
// Date: 4-30-2024
// Program: Maze Competition Course
// Program URL:https://edu.sphero.com/program/16788336/edit

async function startProgram() {
	// Programer: Ash Cowne - Start Text & Audio Checkpoint Commit - Date: 4.30.2024
	await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 90, true)
	await delay(1)
	await speak("Start", true);
	

	// Programmer: Lauryn Meyer - Blue LED Checkpoint Commit - Date: 5.1.2024

	await roll((getHeading() + 0), 75, 2);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 100 });

// Programer: Ash Cowne  - Sound One Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 77,1.4);
	await delay(1);
	await Sound.Effects.Fairy.play()
	
	// Programmer: Lauryn Meyer - Red LED Checkpoint Commit - Date: 5.1.2024
	await roll((getHeading() + 90), 80,0.8);
	await delay(1);
	await roll((getHeading() + 40),70,1);
	await delay(1);
	setMainLed({ r: 100, g: 0, b: 0 });
	await delay(1);
	

	// Programer: Ash Cowne - Sound Two Checkpoint Commit - Date: 5.2.2024
	await roll((getHeading() - 90), 70,0.6);
	await delay(1);
	await roll((getHeading() - 90), 75,1);
	await delay(1);
	await roll((getHeading() + 90), 60,0.7);
	await Sound.Effects.Fireworks.play()
	
	// Programmer: Lauryn Meyer - Green LED Checkpoint Commit - Date: 5.2.2024
	await delay (1);
	await roll((getHeading() + 0), 75,0.4);
	await delay(1);
	await roll((getHeading() + 90), 75,.5);
	await delay(1);  
	await roll((getHeading() - 90), 70,0.4);
	setMainLed({ r: 0, g: 100, b: 0 });

	// Programer: Ash Cowne - Purple LED & Sound Three Checkpoint Commit - Date:
	await delay(1);
	await roll((getHeading() + 0), 60,0.2);
	await delay(1);
	await roll((getHeading() - 90), 75,1);
	await delay(1);
	await roll((getHeading() - 45), 60,0.7);
	await roll((getHeading() + 45), 60,0.5);

	setMainLed({ r: 50, g:0, b: 50 });
	await Sound.Effects.JokeDrum.play()




	// Programer: - Finish Text & Audio Checkpoint Commit - Date:



}
