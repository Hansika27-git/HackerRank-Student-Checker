async function searchStudent(){
    let username = document.getElementById("username").value;

    if(username.trim() === ""){
        alert("Please enter a HackerRank username.");
        return;
    }
    let response = await fetch("profile.json");
    let profile = await response.json();


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