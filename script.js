async function searchStudent(){

    let username = document.getElementById("username").value;

    if(username.trim() === ""){
        alert("Please enter a HackerRank username.");
        return;
    }
    console.log("Username:", username);
    console.log("URL:", `http://localhost:4000/api/student/${username}`);

    let response = await fetch(`http://localhost:4000/api/student/${username}`);

    if(!response.ok){
        document.getElementById("result").innerHTML = `
            <p>❌ Student not found</p>
        `;
        return;
    }

    let profile = await response.json();

    let skillsHTML = "";

    for(let skill of profile.skills){

        skillsHTML += `
            <p>${skill.name} ${"⭐".repeat(skill.stars)}</p>
        `;
    }

    document.getElementById("result").innerHTML = `
        <h2>${profile.username}</h2>

        ${skillsHTML}

        <p><strong>Total Badges:</strong> ${profile.badges}</p>

        <p><strong>Problems Solved:</strong> ${profile.problemsSolved}</p>
    `;
}