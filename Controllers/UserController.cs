﻿using System;
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

        public ActionResult<IEnumerable<object>> Get(string group)
        {
            //do something with the group variable so it can get all the users this is for testing purposes. I need the group name exactly and location
            User[] user = new User[50];
            for (int i = 0; i < 50; i++)
            {
                user[i] = new User(i.ToString(), i, i.ToString());

            }

            return user;
        }
    }
}