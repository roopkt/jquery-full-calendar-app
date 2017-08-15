using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Calendar.Infrastructure;
using Calendar.Models;
using Newtonsoft.Json;

namespace Calendar.Controllers
{
    public class EventsApiController : ApiController
    {
        private readonly InMemoryCalendarEventRepository repository;
        public EventsApiController()
        {
            repository = new InMemoryCalendarEventRepository();
        }

        [HttpGet]
        [ActionName("get-all-events")]
        public List<CalendarEvent> GetAllEvents()
        {

            var events = repository.GetAllEvents().ToList();

            return events;
        }

        [HttpPost]
        [ActionName("save-event")]
        public HttpResponseMessage SaveEvent([FromBody]string calendarEvent)
        {
            var calEvent = JsonConvert.DeserializeObject<CalendarEvent>(calendarEvent) ; 
            repository.SaveEvent(calEvent);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
