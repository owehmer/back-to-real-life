using System.Linq;
using System.Security.Claims;

namespace UserApi.Config
{
    public static class JwtConfig
    {
        public static readonly string KEY = "my_secret_key_12345";
        public static readonly string ISSUER = "http://mysite.com";
        
        public static readonly string JWT_USER_NAME_PROP = "name";
        public static readonly string JWT_USER_ID_PROP = "userId";
        public static readonly string JWT_USER_ACTIVE_PROP = "active";
        
        public static int? GetUserId(this ClaimsIdentity identity)
        {
            var userIdValue = identity.Claims?.FirstOrDefault(c => c.Type == JWT_USER_ID_PROP)?.Value;
            if (int.TryParse(userIdValue, out var userId))
            {
                return userId;
            }

            return null;
        }
        
        public static string GetUserName(this ClaimsIdentity identity)
        {
            return identity.Claims?.FirstOrDefault(c => c.Type == JWT_USER_NAME_PROP)?.Value;
        }
        
        public static bool GetUserActive(this ClaimsIdentity identity)
        {
            var activeValue = identity.Claims?.FirstOrDefault(c => c.Type == JWT_USER_ACTIVE_PROP)?.Value;
            if (bool.TryParse(activeValue, out var active))
            {
                return active;
            }

            return false;
        }
    }
}