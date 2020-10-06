export interface IFilter {
  launchYear: number;
  launchSuccess: boolean;
  landSuccess: boolean;
}
export interface IProgram {
  image: string;
  missionName: string;
  flightNumber: number;
  launchYear: string;
  launchSuccess: string;
  missionId: string[];
}
