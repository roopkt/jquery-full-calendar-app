function CalendarApi($, baseUrl, utility) {
  return {
    getAllEvents: getAllEvents,
    saveEvent: saveEvent
  };

  function getAllEvents() {
    return $.get(getUrl('get-all-events'));
  }

  function saveEvent(calendarEvent) {
    return $.post(getUrl('save-event'), { "": utility.stringify(calendarEvent) });

  }

  function getUrl(action) {
    return baseUrl + 'api/EventsApi/' + action;
  }
}
