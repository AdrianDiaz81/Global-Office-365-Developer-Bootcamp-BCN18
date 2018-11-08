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
    public class CountryController : ControllerBase
    {
        private IEnumerable<Country> countriesCollection;
        public CountryController()
        {
            countriesCollection = new List<Country>();
        }
        // GET: api/Country
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            return countriesCollection;
        }

        // GET: api/Country/5
        [HttpGet("{id}", Name = "GetCountry")]
        public Country Get(string id)
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
