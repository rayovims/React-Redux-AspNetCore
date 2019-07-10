using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupManagement_redux_react_asp.Controllers
{
    public class User
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Account { get; set; }

        public User(string name, int id, string account)
        {
            Name = name;
            Id = id;
            Account = account;
        }
    }
}
