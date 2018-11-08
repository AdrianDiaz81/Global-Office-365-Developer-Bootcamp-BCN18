using System;

namespace api.Models
{
    public class Player
    {
        [Newtonsoft.Json.JsonProperty(PropertyName = "id")]
        public virtual string Id { get; set; }

        public string FullName { get; set; }

        public string Club { get; set; }

        public string Image { get; set; }

        public Country Country { get; set; }

    }
}
