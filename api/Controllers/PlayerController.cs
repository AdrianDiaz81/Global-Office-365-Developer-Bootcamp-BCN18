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
                FullName = "Luka Modrid",
                Club = "Real Madrid",
                Image = "https://s6.eestatic.com/2018/09/01/enfoques/Enfoques_334732197_95541287_1024x576.jpg",
                Country = new Country
                {
                    Name = "Croacia",
                    Contintent = new Continent
                    {
                        Name = "Europa"
                    }
                }
            };
            this.playersCollection.Add(player1);
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
