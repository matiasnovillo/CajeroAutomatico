using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace EmptyProject.Pages
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public class ErrorModel : PageModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        private readonly ILogger<ErrorModel> _logger;

        public ErrorModel(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        public void OnGet(string Error)
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

            if (Error == "TarjetaNoEncontrada")
            {
                ViewData["Error"] = "Tarjeta no encontrada";
            }
            else if (Error == "TarjetaBloqueada") 
            {
                ViewData["Error"] = "Tarjeta bloqueada";
            }
            else if (Error == "DineroInsuficiente")
            {
                ViewData["Error"] = "No tiene suficiente dinero para realizar la transacción";
            }
            else 
            { 
                ViewData["Error"] = Error; 
            }
        }
    }
}
