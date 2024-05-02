// Programer: Ash Cowne  
//Team Member: Lauren
//Bolt ID: CF6D
//Date: 4.30.2024
//Program: Maze Competition
//Program URL: https://edu.sphero.com/program/16788344/edit



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
	

	// Programer: - Sound Two Checkpoint Commit - Date:
	await roll((getHeading() - 90), 70,0.6);
	await delay(1);
	await roll((getHeading() - 90), 75,1);
	await delay(1);
	await roll((getHeading() + 90), 60,0.7);
	await Sound.Ambience.Zoo.play()
	

	
	




	// Programer: - Green LED Checkpoint Commit - Date:




	// Programer: - Purple LED & Sound Three Checkpoint Commit - Date:





	// Programer: - Finish Text & Audio Checkpoint Commit - Date:



}
