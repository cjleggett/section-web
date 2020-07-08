const TABLE = [
    {"team": "Liverpool", "points": 89},
    {"team": "Man. City", "points": 66},
    {"team": "Leicester City", "points": 58},
    {"team": "Chelsea", "points": 57},
    {"team": "Man United", "points": 55},
    {"team": "Wolves", "points": 52},
    {"team": "Arsenal", "points": 49},
    {"team": "Tottenham", "points": 48},
    {"team": "Sheffield United", "points": 48},
    {"team": "Burnley", "points": 46},
    {"team": "Everton", "points": 44},
    {"team": "Newcastle", "points": 43},
    {"team": "Southampton", "points": 43},
    {"team": "Crystal Palace", "points": 42},
    {"team": "Brighton", "points": 36},
    {"team": "West Ham", "points": 31},
    {"team": "Watford", "points": 28},
    {"team": "Aston Villa", "points": 27},
    {"team": "Bournemouth", "points": 27},
    {"team": "Norwich City", "points": 21}
]

document.addEventListener('DOMContentLoaded', () => {
    changeHeader();
    setInterval(changeColor, 5000);
    document.querySelector('#fill').addEventListener('click', fillTable);
})

// Note: Do NOT change exercises.html

// Write changeHeader function to:
//  - Center the header
//  - Make the header red
//  - Make the header say 'Section 4!'


// Write changeColor function that:
//  - Changes table-title color to blue if red
//  - Changes table-title color to red if blue

// Write the fillTable function that:
//  - Adds a row to the table for each team in order of TABLE
//  - The winning team's row should have a green background
//  - Teams 2-4 should have a blue background
//  - Teams 5-6 should have a yellow background
//  - Teams 18-20 should have a red background