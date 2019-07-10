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
    public class TypeController : ControllerBase
    {

        [HttpGet("{ou}")]

        public ActionResult<IEnumerable<string>> GetType(string ou)
        {
            string[] type = new string[3];

            type[0] = "Groups";
            type[1] = "Users";
            type[2] = "ProDevices";

            return type;
        }
    }
}