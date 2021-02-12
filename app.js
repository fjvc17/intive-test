var url = "https://randomuser.me/api/?results=50";


const saveUser = (user) => { 
    console.log(user);
    localStorage.setItem("current_user", JSON.stringify(user));
    window.location.href = 'contact.html';
}

fetch(url)
    .then((Response) => (Response.json()))
    .then(function (data) {
        console.log(data);
        data.results.forEach(
            (u) => {

                const peopleWrapper = document.querySelector(`.people-wrapper`);
                console.log(JSON.stringify(u));
                const stringedUser = JSON.stringify(u);

                const content = `<div class="people-box" onclick='saveUser(${JSON.stringify(u)})'>
                                    <div class="people-img">
                                        <img src="${u.picture.medium}"  id="photo" alt="person">
                                        <div class="people-text">
                                            <h1>${u.name.first} ${u.name.last}</h1>

                                            <p>City: ${u.location.city}<br>Country: ${u.location.country}</p>
                                        
                                        </div>
                                    </div>
                                </div> <br>`;

                peopleWrapper.innerHTML += content;

            
            }
            
        )
});

