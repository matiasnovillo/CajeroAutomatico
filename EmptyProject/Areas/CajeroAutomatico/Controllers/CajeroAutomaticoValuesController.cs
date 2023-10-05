using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Hosting;
using EmptyProject.Areas.CajeroAutomatico.Filters;
using EmptyProject.Areas.CajeroAutomatico.Interfaces;

namespace EmptyProject.Areas.CajeroAutomatico.Controllers
{
    [ApiController]
    [CajeroAutomaticoFilter]
    public partial class CajeroAutomaticoValuesController : ControllerBase
    {
        private readonly IWebHostEnvironment _WebHostEnvironment;
        private readonly ICajeroAutomatico _ICajeroAutomatico;

        public CajeroAutomaticoValuesController(IWebHostEnvironment WebHostEnvironment, ICajeroAutomatico ICajeroAutomatico)
        {
            _WebHostEnvironment = WebHostEnvironment;
            _ICajeroAutomatico = ICajeroAutomatico;
        }

        [HttpPost("~/api/CajeroAutomatico/GetTarjeta")]
        public IActionResult GetTarjeta()
        {
            try
            {
                string Tarjeta = HttpContext.Request.Form["tarjeta"];

                string Respuesta = _ICajeroAutomatico.GetTarjeta(Tarjeta);

                if (Respuesta == "OK")
                {
                    HttpContext.Session.SetString("Tarjeta", Tarjeta);
                }

                return StatusCode(200, Respuesta);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/CajeroAutomatico/GetPIN")]
        public IActionResult GetPIN()
        {
            try
            {
                int PIN = Convert.ToInt32(HttpContext.Request.Form["pin"]);

                string Tarjeta = HttpContext.Session.GetString("Tarjeta") ?? "";

                return StatusCode(200, _ICajeroAutomatico.GetPIN(PIN, Tarjeta));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/CajeroAutomatico/Retiro")]
        public IActionResult Retiro()
        {
            try
            {
                int CantidadDeDinero = Convert.ToInt32(HttpContext.Request.Form["cantidad-de-dinero"]);

                string Tarjeta = HttpContext.Session.GetString("Tarjeta") ?? "";

                return StatusCode(200, _ICajeroAutomatico.Retiro(CantidadDeDinero, Tarjeta));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/CajeroAutomatico/CambiarPIN")]
        public IActionResult CambiarPIN()
        {
            try
            {
                int NuevoPIN = Convert.ToInt32(HttpContext.Request.Form["nuevo-pin"]);

                string Tarjeta = HttpContext.Session.GetString("Tarjeta") ?? "";

                return StatusCode(200, _ICajeroAutomatico.CambiarPIN(NuevoPIN, Tarjeta));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}