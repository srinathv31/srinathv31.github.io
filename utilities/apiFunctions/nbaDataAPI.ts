import axios from "axios";
import { RosterData } from "../interfaces/nbaRoster";

export function getRosterDataAPI( setRoster: (r: RosterData) => void, year: string, team: string ) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/${team}/${year}/Roster`,
        headers: {
            "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
            "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9"
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        setRoster(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
