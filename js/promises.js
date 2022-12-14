"use strict"
// alert("Welcome to the Promises Exercise!");



$(function(){

    // function getGithubUsernames() {
    //     return fetch("https://api.github.com/users")
    //         .then(response => response.json())
    // }
    //
    // getGithubUsernames().then( users => {
    //     users.forEach( userObj => {
    //         //do something with each username
    //         console.log(userObj.login);
    //     });
    // }).catch(error => console.error(error));




    // function gitHubUserLastCommit(username){
    //     return fetch(`https://api.github.com/users/${username}/events/public`,{
    //         headers: {
    //             "Authorization": GITHUB_PROMISES_TOKEN
    //         }
    //         })
    //         .then(response => response.json())
    //         .then(events => {
    //             // console.log(events)
    //             const dateOfLastCommit = new Date(events[0].created_at)
    //             return dateOfLastCommit;
    //             // console.log(dateOfLastCommit);
    //         }).catch( error => console.error(error));
    // }

    // const getLastPush = gitHubUserLastCommit("thevaliantjosh");

    // getLastPush.then(value => console.log(value)).catch(error =>console.error(error));


    async function gitUserLastCommitAsync(username){
          let response = await fetch(`https://api.github.com/users/${username}/events/public`,{headers: {"Authorization": GITHUB_PROMISES_TOKEN}});
        response = await response.json();
        let events = response;
        const dateOfLastCommit = new Date(events[0].created_at);
        console.log(dateOfLastCommit)
        return dateOfLastCommit;
    }

    // gitHubUserLastCommit("thevaliantjosh");
    // let datePromise = gitUserLastCommitAsync("thevaliantjosh");
    // console.log(datePromise);
    // datePromise.then(response => console.log(response));


    // $("#source").on("keyup", function(){
    //     $("#output").text($("#source").val());
    // })

    // sync function getUserLastCommitAsync(username) {
    //     try {
    //         let response = await fetch(`https://api.github.com/usersss/${username}`);
    //         let events = await response.json();
    //         console.log(events);
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }




    //We want the value from the form to be inserted into the function
    //How do we store the value from the form?
    // let usersLastCommitDate;
    // let userName;
    $("#userNameInput").keyup(function(e){
        // console.log(e.key)
        if (e.key === "Enter"){
            // userName = $(this).val();
            // usersLastCommitDate = gitUserLastCommitAsync(userName);
            gitUserLastCommitAsync($(this).val()).then(response => $("#output").text(`${response}`))
        }

    })
    // console.log(userName)
    // console.log(userEntered);

})