async function getlyrics(){
    // getting user inputs
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const result = document.getElementById('lyricresult');

    // validating user inputs, means checking both input fields are entered or not.
    if (!artist || !song){
        result.innerHTML = `<div class = "alert alert-warning">Please enter both artist and title.</div>`;
        return;
    }

    // now we'll display loading msg
    result.innerHTML = `<div class = "text-center>Feteching lyrics</div>`;

    // now fetching lyrics
    try{
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await response.json();

        // checking lyrics exist or not
        if (data.lyrics){
            result.innerHTML = `<h4>${artist} - ${song}</h4><pre>${data.lyrics}</pre>`;
        }
        else{
            result.innerHTML = `<div class = "alert alert-danger">Lyrics not found. Try another song.</div>`;
        }
    }
    catch (error){
        // now handling error and display our own error msg
        result.innerHTML = `<div class = "alert alert-danger">Error fetching lyrics. Please try again later.</div>`;
    }
}