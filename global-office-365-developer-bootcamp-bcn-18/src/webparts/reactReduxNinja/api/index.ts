import IPlayer from "../model/IPlayer";
import ICountry from "../model/ICountry";
import IContinent from "../model/IContinent";

const mapToContinent=(response:any):IContinent=>{
    const result:IContinent={
        name:response.name
    };
    return result;
};
const maptoCountry=(response:any):ICountry=>{
    const result:ICountry={
        continent: mapToContinent(response.contintent),
        name:response.name
    };

    return result;
};

const mapToIDPlayer= (response:any):IPlayer =>{
    return {
        country:maptoCountry(response.country),
        club:response.club,
        id:response.id,
        fullName:response.fullName,
image:response.image
    };
};

const mapToPlayer = (response:any): IPlayer[] => {

    const result: IPlayer[] = [];
    response.map((item:any) => {
        const playerMap: IPlayer = {
            id:item.id,

            country:maptoCountry(item.country),

            club:item.club,

            fullName:item.fullName,

image:item.image

        };
        result.push(playerMap);
    });
    return result;
};


const addPlayerAsync= async (player:IPlayer):Promise<boolean> =>{
    const addManagedURL = `https://localhost:44376/api/player`;
    const obj = {
        body: JSON.stringify(
            {
                Id: player.id,

 FullName: player.fullName,

 Club: player.club,

 Image: player.image,
 Country: {
    Name: "Portugal",
    Contintent: {
        Name: "Europe"
    }
}
            }
        )    ,

      headers:
       { 
           'Content-Type': 'application/json' 
        } ,    

        method: 'POST'

        
    };
    const response = await fetch(addManagedURL, obj);

    return response.ok;

};


const updatePlayerAsync= async (player:IPlayer):Promise<boolean> =>{
    const addManagedURL = `https://localhost:44376/api/player`;
    const obj = {
        body: JSON.stringify(
            {
                Id: player.id,

 FullName: player.fullName,

 Club: player.club,

 Image: player.image,
 Country: {
    Name: "Portugal",
    Contintent: {
        Name: "Europe"
    }
}
            }
        )    ,

      headers:
       { 
           'Content-Type': 'application/json' 
        } ,    
        method: 'PUT'

        
    };
    const response = await fetch(addManagedURL, obj);

    return response.ok;

};



const getPlayerAsync = async (): Promise<IPlayer[]> => {
    const addManagedURL = `https://localhost:44376/api/player`;
    const obj = {
      headers:
       { 
           'Content-Type': 'application/json' 
        } ,    
        method: 'GET'                 
    };

    const response = await fetch(addManagedURL, obj);
    const responseOne = await (response.json());
    return mapToPlayer(responseOne);
};

const getPlayerIdAsync = async (id:string): Promise<IPlayer> => {
    const addManagedURL = `https://localhost:44376//api/player/` +id;
    const obj = {
      headers:
       { 
           'Content-Type': 'application/json' 
        } ,    
        method: 'GET'          
    };

    const response = await fetch(addManagedURL, obj);
    const responseOne = await (response.json());
    return mapToIDPlayer(responseOne);
};

export const playerAPI = {
    addPlayerAsync,    
    getPlayerAsync,    
    getPlayerIdAsync,    
    updatePlayerAsync    
};