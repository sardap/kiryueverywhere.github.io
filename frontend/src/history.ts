
interface guessHistoryEntry {
    win: boolean;
    guess_count: number;
    location_number: number;
}

interface guessCookie {
    guesses: Array<guessHistoryEntry>,
}

function getCookie(document: Document, cname: string) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


export function getGuessHistory(document: Document) {
    const guess_cookie_string = getCookie(document, "guesses");
    if (guess_cookie_string == "") {
        return []
    }
    const current_cookie: guessCookie = JSON.parse(guess_cookie_string);
    return current_cookie.guesses;
}

export function resetCookie(document: Document) {
    document.cookie = "";
}

export function saveGuess(document: Document, win: boolean, guess_count: number, location_number: number) {
    const guess_cookie_string = getCookie(document, "guesses");
    let current_cookie: guessCookie;
    if (guess_cookie_string != "") {
        current_cookie = JSON.parse(guess_cookie_string);
    } else {
        current_cookie = { guesses: [] }
    }
    current_cookie.guesses.push({ win: win, guess_count: guess_count, location_number: location_number });
    const d = new Date();
    d.setTime(d.getTime() + (36500 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = "guesses" + "=" + JSON.stringify(current_cookie) + ";" + expires;
}
