using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using UserApi.Config;

namespace UserApi.Controllers
{
    public class MainController : Controller
    {
        [HttpGet("gettoken")]
        public Object GetToken()
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtConfig.KEY));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            //Create a List of Claims, Keep claims name short    
            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            permClaims.Add(new Claim(JwtConfig.JWT_USER_ACTIVE_PROP, "1"));
            permClaims.Add(new Claim(JwtConfig.JWT_USER_ID_PROP, "1"));
            permClaims.Add(new Claim(JwtConfig.JWT_USER_NAME_PROP, "bilal"));

            //Create Security Token object by giving required parameters    
            var token = new JwtSecurityToken(JwtConfig.ISSUER, //Issure
                JwtConfig.ISSUER, //Audience    
                permClaims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);
            var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);
            return new {data = jwt_token};
        }

        [HttpPost("getname1")]
        public String GetName1()
        {
            if (User.Identity.IsAuthenticated)
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                }

                return "Valid";
            }
            else
            {
                return "Invalid";
            }
        }

        [Authorize]
        [HttpPost("getname2")]
        public Object GetName2()
        {
            var identity = User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                var name = identity.GetUserName();
                return new
                {
                    data = name
                };
            }

            return null;
        }
    }
}