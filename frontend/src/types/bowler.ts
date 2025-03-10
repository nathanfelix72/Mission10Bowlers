export type Team = {
  teamId: number;
  teamName: string;
};

export type bowler = {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  teamId: number;
  team: Team;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
};
