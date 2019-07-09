using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroupManagement_redux_react_asp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FindController : ControllerBase
    {
        [HttpGet("{user}")]

        public ActionResult<string> Get(string user)
        {
            string username = "Raymundo";
            if (user == username)
            {
                return username;
            }
            return "Not Found";
        }
    }
}