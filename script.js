const fetchButton = document.getElementById("fetchButton");
const userList = document.getElementById("userList");

fetchButton.addEventListener("click", async () => {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let data = await response.json();

    if (data.data && data.data.length > 0) {
      data.data.forEach((ele) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let p_email = document.createElement("p");
        let img = document.createElement                 ("img");
        p.innerText = ele.first_name + " " + ele.last_name;
        p_email.innerHTML = ele.email,
        img.src = ele.avatar;
        div.append(p,p_email,img);
        userList.append(div);
      });
    }else {
        userList.innerHTML = 'No users found.';
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    userList.innerHTML = "Error fetching user data.";
  }
});
