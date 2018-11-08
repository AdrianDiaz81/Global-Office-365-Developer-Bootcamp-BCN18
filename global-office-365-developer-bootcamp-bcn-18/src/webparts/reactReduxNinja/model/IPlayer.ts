import ICountry from "./ICountry";


export default interface IPlayer {
    id:string;
    fullName:string;
    club:string;
    image:string;
    country:ICountry;
}