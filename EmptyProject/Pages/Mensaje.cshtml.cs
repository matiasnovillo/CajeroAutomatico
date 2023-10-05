using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace EmptyProject.Pages
{
    public class MensajeModel : PageModel
    {

        public MensajeModel(ILogger<PINModel> logger)
        {
        }

        public void OnGet(string Mensaje)
        {
            if (Mensaje == "TarjetaBloqueada")
            {
                ViewData["MensajePrincipal"] = "Atención";
                ViewData["MensajeSecundario"] = "Acaba de perder sus 4 intentos para ingresar. Su tarjeta ha sido bloqueada.";
            }

            if (Mensaje == "TransaccionExitosa")
            {
                ViewData["MensajePrincipal"] = "Transacción exitosa";
                ViewData["MensajeSecundario"] = "Su transacción ha sido exitosa";
            }

            if (Mensaje == "PINCambiado")
            {
                ViewData["MensajePrincipal"] = "PIN cambiado correctamente";
                ViewData["MensajeSecundario"] = "Su PIN ha sido actualizado correctamente";
            }
        }
    }
}
