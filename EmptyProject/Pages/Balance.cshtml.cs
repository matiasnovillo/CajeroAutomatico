using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using EmptyProject.Areas.CajeroAutomatico.Models;
using System;
using EmptyProject.Areas.CajeroAutomatico.Interfaces;

namespace EmptyProject.Pages
{
    public class BalanceModel : PageModel
    {

        private readonly ICajeroAutomatico _ICajeroAutomatico;

        public BalanceModel(ILogger<PINModel> logger, ICajeroAutomatico ICajeroAutomatico)
        {
            _ICajeroAutomatico = ICajeroAutomatico;
        }

        public void OnGet(string Mensaje)
        {
            string Tarjeta = HttpContext.Session.GetString("Tarjeta") ?? "";

            UsuarioTarjetaModel UsuarioTarjetaModel = new UsuarioTarjetaModel().GetTarjeta(Tarjeta);

            int NewEnteredId = _ICajeroAutomatico.InsertarRegistroDeOperacion(
                UsuarioTarjetaModel.UsuarioTarjetaId, DateTime.Now, "B", 0);

            ViewData["Tarjeta"] = UsuarioTarjetaModel.Tarjeta;
            ViewData["FechaDeVencimiento"] = UsuarioTarjetaModel.FechaDeVencimiento;
            ViewData["CantidadDeDinero"] = UsuarioTarjetaModel.CantidadDeDinero;
        }
    }
}
