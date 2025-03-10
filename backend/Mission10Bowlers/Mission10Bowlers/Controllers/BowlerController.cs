using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10Bowlers.Data;

namespace Mission10Bowlers.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _bowlerContext;

        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include (b => b.Team)
                .ToList();
            return (bowlerList);
        }
    }
}
