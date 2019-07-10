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
    public class OuController : ControllerBase
    {
        [HttpGet]

        public ActionResult<IEnumerable<string>> GetOut ()
        {
            string[] ou = new string[22];

            ou[0] = "ATL";
            ou[1] = "DataCTR";
            ou[2] = "Domain Controllers";
            ou[3] = "ISMD";
            ou[4] = "LVL";
            ou[5] = "NJC";
            ou[6] = "OUAdmins";
            ou[7] = "R03";
            ou[8] = "R07";
            ou[9] = "R10";
            ou[10] = "R12";
            ou[11] = "R13";
            ou[12] = "R19";
            ou[13] = "R20";
            ou[14] = "R21";
            ou[15] = "R22";
            ou[16] = "R23";
            ou[17] = "R24";
            ou[18] = "R25";
            ou[19] = "R27";
            ou[20] = "SysMgt";
            ou[21] = "upsGroups";

            return ou;
        }
    }
}