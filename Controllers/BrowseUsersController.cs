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
    public class BrowseUsersController : ControllerBase
    {
        [HttpGet("{ou}/{type}")]

        public ActionResult<IEnumerable<object>> GetUsers (string ou, string type)
        {
            User[] user = new User[50];
            for (int i = 0; i < 50; i++)
            {
                user[i] = new User(i.ToString(), i, i.ToString());

            }

            return user;
        }
    }

   
}