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
    public class GroupController : ControllerBase
    {
        [HttpGet] 
        public ActionResult<IEnumerable<string>> Get ()
        {
            string[] names = new string[50];

            for (int i = 0; i < 50; i++)
            {
                names[i] = i.ToString();
            }

            return names;
        }

        [HttpGet("{group}")]
        public ActionResult<string> Get(string group)
        {
            string[] names = new string[50];

            for (int i = 0; i < 50; i++)
            {
                names[i] = i.ToString();
            }

            for (int i = 0; i < names.Length; i++)
            {
                if (names[i] == group)
                {
                    return group;
                }
            }

            return "No Results Found";
        }
    }
}