using EmptyProject.Areas.CajeroAutomatico.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace EmptyProject.Pages
{
    [CajeroAutomaticoFilter]
    public class IndexModel : PageModel
    {

        public IndexModel(ILogger<IndexModel> logger)
        {
        }

        public void OnGet()
        {
        }
    }
}
