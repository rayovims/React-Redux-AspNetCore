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
    public class BrowseController : ControllerBase
    {
        [HttpGet] 

        public ActionResult<IEnumerable<string>> Get ()
        {
            string[] groups = new string[50];

            for (int i = 0; i < 50; i++)
            {
                groups[i] = "Group " + i.ToString();
            }

            return groups;
        }
    }
}