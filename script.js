// Function to generate a random kiss message using a simple AI
function generateKiss() {
    // AI-generated kiss messages
    const aiKisses = [
        "Oops! I just kissed your screen!",
        "My virtual lips are puckered up just for you!",
        "If kisses were pixels, you'd be in HD!",
        "Did it hurt when you fell from the server? Because you've got my bytes tingling!",
        "Roses are red, violets are blue, here's a kiss, just for you!",
        "Do you have a map? I just got lost in your cyber lips!",
        "Is it hot in here or is it just our virtual chemistry?",
        "Are you a keyboard? Because you're just my type!",
        "I must be a server, because I'm falling for your connection!",
        "Did you reboot recently? Because you've been running through my CPU all day!",
        "I'm not a photographer, but I can picture us together in the cloud!",
        "I hope your day is as nice as your bot!",
        "Are you a magician? Whenever I look at you, everyone else disappears!",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you!",
        "Are you made of copper and tellurium? Because you're Cu-Te!",
        "I must be a snowflake because I've fallen for you!",
        "Do you believe in love at first sight, or should I algorithmically loop through again?"
    ];

    // GIF filenames corresponding to each kiss message
    const gifFilenames = [
        "1.gif",
        "2.gif",
        "3.gif",
        "4.gif",
        "5.gif",
        "6.gif",
        "7.gif",
        "8.gif",
        "9.gif",
        "10.gif",
        "11.gif",
        "12.gif",
        "13.gif",
        "14.gif",
        "15.gif",
        "16.gif",
        "17.gif"
    ];

    // Check if gifFilenames array is empty or undefined
    if (!gifFilenames || gifFilenames.length === 0) {
        console.error("No GIF filenames found.");
        return;
    }

    // Generate a random index within the bounds of gifFilenames array
    const randomIndex = Math.floor(Math.random() * gifFilenames.length);
    
    // Get the kiss message and GIF filename corresponding to the random index
    const kissMessage = aiKisses[randomIndex];
    const gifFilename = gifFilenames[randomIndex];
    const gifURL = `GIF/${gifFilename}`;

    // Display the kiss message
    document.getElementById("kissMessage").textContent = kissMessage;

    // Display GIF corresponding to the kiss message
    const gifContainer = document.getElementById("gifContainer");
    document.getElementById("kissGif").src = gifURL;
}

// Call generateKiss function when the page loads to display the default GIF
generateKiss();

// Event listener for the button click
document.getElementById("generateKissBtn").addEventListener("click", generateKiss);
