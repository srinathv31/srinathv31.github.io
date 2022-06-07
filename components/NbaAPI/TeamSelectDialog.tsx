import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FaBasketballBall } from "react-icons/fa";

export default function DialogSelect({ setTeam, team, setYear, year }: {
    // eslint-disable-next-line no-unused-vars
    setTeam: (t: string) => void, team: string,
    // eslint-disable-next-line no-unused-vars
    setYear: (y: string) => void, year: string
}) {
    const [open, setOpen] = useState(false);
    const [teamYear, setTeamYear] = useState<{ team: string, year: string }>({ team: team, year: year });

    const team_list = ["ATLANTA HAWKS", "BOSTON CELTICS", "BROOKLYN NETS", "CHARLOTTE HORNETS", "CHICAGO BULLS", "CLEVELAND CAVALIERS", "DALLAS MAVERICKS", "DENVER NUGGETS", "DETROIT PISTONS", "GOLDEN STATE WARRIORS", "HOUSTON ROCKETS", "INDIANA PACERS", "LOS ANGELES CLIPPERS", "LOS ANGELES LAKERS", "MEMPHIS GRIZZLIES", "MIAMI HEAT", "MILWAUKEE BUCKS", "MINNESOTA TIMBERWOLVES", "NEW ORLEANS PELICANS", "NEW YORK KNICKS", "OKLAHOMA CITY THUNDER", "ORLANDO MAGIC", "PHILADELPHIA 76ERS", "PHOENIX SUNS", "PORTLAND TRAIL BLAZERS", "SACRAMENTO KINGS", "SAN ANTONIO SPURS", "TORONTO RAPTORS", "UTAH JAZZ", "WASHINGTON WIZARDS"];
    const yearList = Array.from({ length: 45 }, (_, i) => i + 1977);

    const handleTeam = (event: SelectChangeEvent<typeof team>) => {
        setTeamYear({ team: ""+event.target.value, year: teamYear.year });
    };
    
    const handleYear = (event: SelectChangeEvent<typeof year>) => {
        setTeamYear({ team: teamYear.team, year: ""+event.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== "backdropClick") {
            setOpen(false);
        }
    };
    
    const handleGet = () => {
        setTeam(teamYear.team);
        setYear(teamYear.year);
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" color="success" endIcon={<FaBasketballBall />}>
                Select Team Roster
            </Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{"Select the Franchise and the Year's Roster you want to see"}</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="team-dialog-native">Team</InputLabel>
                            <Select
                                value={teamYear.team}
                                onChange={handleTeam}
                                input={<OutlinedInput label="Team" id="team-dialog-native" />}
                            >
                                {team_list.map((team, index) => {
                                    return (
                                        <MenuItem key={index} value={team}>{team}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="year-dialog-select-label">Year</InputLabel>
                            <Select
                                labelId="year-dialog-select-label"
                                id="year-dialog-select"
                                value={teamYear.year}
                                onChange={handleYear}
                                input={<OutlinedInput label="Year" />}
                            >
                                {yearList.map((year, index) => {
                                    return (
                                        <MenuItem key={index} value={year}>{year}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleGet}>Get Roster</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
