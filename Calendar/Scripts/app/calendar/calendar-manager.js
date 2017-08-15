function CalendarManager(calendarController, eventApi, utility, logger) {
  var dates = {};

  return {
    init: init
  }

  function init() {
    calendarController.configureCalendar(getCalendarConfiguration());
    refreshCalendar();
    calendarController.bindCreateEventButtonClick(onEventEdited);
  }

  function refreshCalendar() {
    eventApi.getAllEvents()
      .done(calendarController.onGetAllEventsSuccess)
      .fail(calendarController.onGetAllEventsFail);
  }

  function onEventEdited(data) {
    var title = calendarController.getTitle();

    eventData = {
      id: utility.uniqueId(),
      title: title,
      start: dates.start.toString(),
      end: dates.end.toString()
    };

    eventApi.saveEvent(eventData).done(function () {
      calendarController.onSaveEventSuccess(eventData);
    });
  }

  function setStartEnd(start, end) {
    dates = {
      start: start,
      end: end
    };
  }

  function getCalendarConfiguration() {
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: Date.now(),
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: onDateSelect,
      editable: true,
      eventLimit: true, // allow "more" link when too many events
    };
  }

  function onDateSelect(start, end) {
    setStartEnd(start, end); // save start and end dates locally.
    calendarController.showEventPopup(); // open popup
    calendarController.emptyTitle(); // empty event title
    calendarController.focusTitle(); // show focus on text box.
    calendarController.unSelectCalendar();
  }
}





