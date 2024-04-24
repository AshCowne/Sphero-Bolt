// Programer: Ash Cowne  
//Team Member: Lauren
//Bolt ID: CF6D
//Date: 4.16.2024
//Program: Hello World - Sandbox
//Program URL: https://edu.sphero.com/program/16700433/edit


// Check Point 1
// Programmer: Lauryn Meyer :Programer 1

async function startProgram() {
	await roll(0,70,2.25)	
	await delay (1);



//CheckPoint 2
// Programer: Ash Cowne  : Programer 2

	await roll((getHeading() - 70), 60, 2.5);
	await delay (1);
	await roll((getHeading() - 90), 60, 1);
	await delay (1);
}