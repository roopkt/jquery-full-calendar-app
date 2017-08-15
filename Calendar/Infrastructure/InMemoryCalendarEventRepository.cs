using System;
using System.Collections.Generic;
using Calendar.Models;

namespace Calendar.Infrastructure
{
    // https://weblogs.asp.net/gunnarpeipman/using-fullcalendar-jquery-component-with-asp-net-mvc
    public class InMemoryCalendarEventRepository
    {
        public static Dictionary<string, CalendarEvent> AllEvents = new Dictionary<string, CalendarEvent>();

        static InMemoryCalendarEventRepository()
        {
            AllEvents.Add("1", new CalendarEvent { Id = "1", Title = "Go School", Start = DateTime.Today.Date.ToString("s"), End = DateTime.Today.AddDays(2).Date.ToString("s") });
        }
        public void SaveEvent(CalendarEvent calendarEvent)
        {
            if (string.IsNullOrWhiteSpace(calendarEvent.Id)) return;
            AllEvents[calendarEvent.Id] = calendarEvent;
        }

        public IEnumerable<CalendarEvent> GetAllEvents()
        {
            return AllEvents.Values;
        }
    }
}