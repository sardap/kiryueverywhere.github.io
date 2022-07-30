export enum FinalGuess {
  NotFinal,
  Win,
  Lose
}

interface guessHistoryEntry {
  x_per: number;
  y_per: number;
  final_guess: FinalGuess;
}

interface guessCookie {
  guesses: Record<number, guessHistoryEntry[]>;
}

function getCookie(document: Document, cname: string) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const guesses_cookie_key = "guesses";

export function resetCookie(document: Document): void {
  document.cookie = "";
}

export function getGuesses(document: Document): guessCookie {
  const guess_cookie_string = getCookie(document, guesses_cookie_key);
  if (guess_cookie_string != "") {
    return JSON.parse(guess_cookie_string);
  }

  return { guesses: {} };
}

export function getGuessesForLocation(document: Document, location_number: number): guessHistoryEntry[] {
  const guesses_cookie = getGuesses(document);
  const guesses = guesses_cookie.guesses;
  if (!(location_number in guesses)) {
    return [];
  }
  return guesses[location_number];
}

export function saveGuess(
  document: Document,
  location_number: number,
  x_per: number,
  y_per: number,
  final_guess: FinalGuess,
): void {
  const current_cookie = getGuesses(document);
  if (!(location_number in current_cookie.guesses)) {
    current_cookie.guesses[location_number] = [];
  }
  current_cookie.guesses[location_number].push({
    x_per: x_per,
    y_per: y_per,
    final_guess: final_guess,
  });

  const d = new Date();
  d.setTime(d.getTime() + 36500 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie =
    guesses_cookie_key + "=" + JSON.stringify(current_cookie) + ";" + expires;
}

export function finishedToday(
  document: Document,
  current_location: number
): boolean {
  const guesses_cookie = getGuesses(document);
  if (!(current_location in guesses_cookie.guesses)) {
    return false;
  }

  const current_guesses = guesses_cookie.guesses[current_location] as guessHistoryEntry[];
  for (let i = 0; i < current_guesses.length; i++) {
    const guess = current_guesses[i];
    if (guess.final_guess == FinalGuess.Lose || guess.final_guess == FinalGuess.Win) {
      return true;
    }
  }

  return false;
}
