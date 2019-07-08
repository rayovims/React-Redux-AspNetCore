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
    public class SearchController : ControllerBase
    {
 
        [HttpGet]

        public ActionResult<string> Get()
        {
            return "Start typing to enable search";
        }

        [HttpGet("{group}")]

        public ActionResult<string> Get(string group)
        {

            Console.WriteLine(group);
            string[] groups = new string[50];

            for (int i = 0; i < 50; i++)
            {
                groups[i] = "Group " + i.ToString();
            }
            //figure out a way to enable search after first 3 characters

            for (int i = 0; i < groups.Length; i++)
            {
                if (groups[i] == group)
                {
                    return group;
                }
            }

            return "No Results Found";

        }
    }
}
