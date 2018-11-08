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
    public class ContinentController : ControllerBase
    {
        private IEnumerable<Continent> countriesCollection;
        public ContinentController()
        {
            countriesCollection = new List<Continent>();
        }
        // GET: api/Country
        [HttpGet]
        public IEnumerable<Continent> Get()
        {
            return countriesCollection;
        }

        // GET: api/Country/5
        [HttpGet("{id}", Name = "GetContinent")]
        public Continent Get(string id)
        {
            return  this.countriesCollection.FirstOrDefault(x=>x.Name==id);
        }

        // POST: api/Country
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Country/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
