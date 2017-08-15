using System.Linq;
using System.Web.Mvc;
using Calendar.Infrastructure;
using Calendar.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Calendar.Controllers
{

    public class ManageEventsController : Controller
    {
       
        public ActionResult Index()
        {
            return View("Index");
        }

    }
}