window.onload = function () {
    const stringU = localStorage.getItem("current_user");
    const u = JSON.parse(stringU);
    console.log(u);

    const imageContent = `<div class="people-image">
    <img src="${u.picture.large}"  id="pic" alt="person"></div>`

    const content =
        `<div class="people-box">
                <div class="people-text">
                    <div class="text-Name">
                        <h1>${u.name.first} ${u.name.last}</h1>
                        
                    </div>
                    <div class="text-info">
                      <div>
                        <p><i class="far fa-user-circle"></i> : ${u.login.username}</p>
                        <P><i class="fas fa-birthday-cake"></i> : ${u.dob.age}</p>
                        <p><i class="far fa-building"></i> : ${u.location.city}</p>
                      </div>
                      <div>
                            <p><i class="far fa-flag"></i> : ${u.location.country}</p>
                            <p><i class="far fa-envelope"></i> : ${u.email}</p>
                            <p><i class="fas fa-mobile-alt"></i> : ${u.cell}</p>
                        </div>
                    </div>       
                </div>
        </div> 
        <br>`;
    document.querySelector('.show-info').innerHTML = content
    document.querySelector('.show-image').innerHTML = imageContent
};