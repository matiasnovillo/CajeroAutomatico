using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace EmptyProject.Areas.CajeroAutomatico.Filters
{
    public class CajeroAutomaticoFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public override void OnResultExecuting(ResultExecutingContext context)
        {
        }

        public override void OnResultExecuted(ResultExecutedContext context)
        {
        }
    }
}