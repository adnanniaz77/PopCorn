$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyAPnI-UqekgQQuml3FsSyriamX1SaW935c",
        authDomain: "ucb-2019.firebaseapp.com",
        databaseURL: "https://ucb-2019.firebaseio.com",
        projectId: "ucb-2019",
        storageBucket: "ucb-2019.appspot.com",
        messagingSenderId: "245660783375",
        appId: "1:245660783375:web:e95bee3f6eb0d0071a247a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    db.ref().on('value', function (snap) {
        console.log(snap.val().movies);
    });


    // const apiKey;
    const apiKey = "22e7c1bb96e31278c7328fa9a52b5bad";
    const imgDb = "http://image.tmdb.org/t/p/w185/";
    const queryUrl = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${apiKey}`;
    let count = 0;

    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function (_data) {
        let results = _data.results;
        for (let element in results) {
            allPosters = results[element].poster_path;
            console.log(imgDb + allPosters);

            let posterImg = `<div>
                <img class="img-fluid img-thumbnail" src="${imgDb + allPosters}" alt="">
                </div>`;
            $('.images-container').append(posterImg);
        }
    });
})
