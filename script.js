function searchStudent(){
    let username = document.getElementById("username").value;

    if(username.trim() === ""){
        alert("Please enter a HackerRank username.");
        return;
    }
    
    let profile = {
        username: username,
        badges: 18,
        problemsSolved: 256,
        skills: [
            {
                name: "Python",
                stars: 5
            },
            {
                name: "Java",
                stars: 3
            },
            {
                name: "SQL",
                stars: 2
            },
            {
                name: "C",
                stars: 5
            }
        ]
    };
    let skillsHTML = "";
    for(let skill of profile.skills){
        skillsHTML += ` 
        <p>${skill.name} ${"⭐".repeat(skill.stars)}</p>
        `;
    }
    document.getElementById("result").innerHTML  = `
        <h2>${profile.username}</h2>
        ${skillsHTML}


        <p><strong>Total Badges: </strong>${profile.badges}</p>

        <p><strong>Problems Solved: </strong>${profile.problemsSolved}</p>
   `;
}
fetch("profile.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.username);
        console.log(data.badges);
        console.log(data.problemsSolved);
        console.log(data.skills);
    });