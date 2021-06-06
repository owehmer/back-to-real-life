using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using UserApi.Config;

namespace UserApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            SetupJWTServices(services);
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
        
        private void SetupJWTServices(IServiceCollection services)  
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)  
                .AddJwtBearer(options =>  
                {  
                    options.TokenValidationParameters = new TokenValidationParameters  
                    {  
                        ValidateIssuer = true,  
                        ValidateAudience = true,  
                        ValidateIssuerSigningKey = true,  
                        ValidIssuer = JwtConfig.ISSUER,  
                        ValidAudience = JwtConfig.ISSUER,  
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtConfig.KEY))  
                    };  
  
                    options.Events = new JwtBearerEvents  
                    {  
                        OnAuthenticationFailed = context =>  
                        {  
                            if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))  
                            {  
                                context.Response.Headers.Add("Token-Expired", "true");  
                            }  
                            return Task.CompletedTask;  
                        }  
                    };  
                });  
        }  
    }
}