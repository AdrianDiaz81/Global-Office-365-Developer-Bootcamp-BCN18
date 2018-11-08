using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        List<Player> playersCollection;
        public PlayerController()
        {
            this.playersCollection = new List<Player>();

            Player player1 = new Player
            {
                Id="1",
                FullName = "Lebron James",
                Club = "LA Lakers",
                Image = "https://cdn.images.express.co.uk/img/dynamic/4/590x/LeBron-James-1042406.jpg?r=1541637526668",
                Country = new Country
                {
                    Name = "USA",
                    Contintent = new Continent
                    {
                        Name = "AMERICA"
                    }
                }
            };
            Player player2 = new Player
            {
                Id = "2",
                FullName = "Stephen Curry",
                Club = "Golden State Warriors",
                Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/245px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
                Country = new Country
                {
                    Name = "USA",
                    Contintent = new Continent
                    {
                        Name = "AMERICA"
                    }
                }
            };
            Player player3 = new Player
            {
                Id = "3",
                FullName = "Michael Jordan",
                Club ="Chicago Bulls ",
                Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBAWBaFyj2njBu_pe13O2U0fmAAUcEQbHanFQBKGrGdMUCZvm",
                Country = new Country
                {
                    Name = "USA",
                    Contintent = new Continent
                    {
                        Name = "AMERICA"
                    }
                }
            };
            this.playersCollection.Add(player1);
            this.playersCollection.Add(player2);
            this.playersCollection.Add(player3);
        }

        // GET: api/Player
        [HttpGet]
        public async Task<IEnumerable<Player>> Get()
        {
            return this.playersCollection;
        }

        // GET: api/Player/5
        [HttpGet("{id}", Name = "GetPlayer")]
        public async Task<Player> Get(string id)
        {
            return this.playersCollection.FirstOrDefault(x => x.Id == id);
        }

        // POST: api/Player
        [HttpPost]
        public bool Post([FromBody] Player value)
        {
            return true;
        }

        // PUT: api/Player/5
        [HttpPut()]
        public async Task Put([FromBody] Player value)
        {
            //var players = await this.cosmosRepository.GetAllAsync(x => x.InternalId == value.InternalId);
            //await this.cosmosRepository.UpdateItemAsync(value, value.Id);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
