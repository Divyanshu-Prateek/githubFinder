//init UI
const ui = new UI();

// init github
const github = new GitHub();

// Search User
document.getElementById('searchUser').addEventListener('keyup',searchUser)

// search User function
function searchUser(e){
  const user = e.target.value;
  if(user!==''){
    // Make Http request for user
    github.getUser(user)
      .then(data=>{
        if(data.profile.message==='Not Found'){
          // Show Alert
          //console.log("show Alert")
          ui.showAlert('User Not found','alert alert-danger');
        }
        else{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          //console.log(data);
        }
        })
  }
  else{
    // cleat the Profile
    ui.clearProfile();
  }
  
}