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
    public class UserController : ControllerBase
    {
        [HttpGet("{group}")]

        public ActionResult<IEnumerable<string>> Get (string group)
        {
            string[] users = new string[50];

            for (int i = 0; i < 50; i++)
            {
                users[i] = "User " + i.ToString();
            }

            return users;
        }
    }
}