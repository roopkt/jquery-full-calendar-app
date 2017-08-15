var calendarController = (function () {
  return {
    configureCalendar: configureCalendar,
    bindCreateEventButtonClick: bindCreateEventButtonClick,
    onGetAllEventsSuccess: onGetAllEventsSuccess,
    onGetAllEventsFail: onGetAllEventsFail,
    onSaveEventSuccess: onSaveEventSuccess,
    getTitle: getTitle,
    showEventPopup: showEventPopup,
    emptyTitle: emptyTitle,
    focusTitle: focusTitle,
    unSelectCalendar: unSelectCalendar
  };

  function bindCreateEventButtonClick(handler) {
    $('#createEvent').on('click', handler.bind(this));
  }

  function configureCalendar(config) {
    $('#calendar').fullCalendar(config);
  }

  function emptyTitle() {
    return $('#event-title').val('');
  }

  function getTitle() {
    return $('#event-title').val().trim();
  }

  function unSelectCalendar() {
    $('#calendar').fullCalendar('unselect');
  }

  function focusTitle() {
    setTimeout(function () { $("#event-title").focus() }, 500);
  }

  function showEventPopup() {
    $("#event-popup").modal();
  }

  function onSaveEventSuccess(calendarEvent) {
    $('#calendar').fullCalendar('renderEvent', calendarEvent, true); // stick? = true
  }

  function onGetAllEventsSuccess(calendarEvents) {
    logger.log('events from server: ', calendarEvents);
    var $calendar = $('#calendar');
    $calendar.fullCalendar('removeEvents');
    $calendar.fullCalendar('addEventSource', calendarEvents);
  }

  function onGetAllEventsFail(d) {
    $('#error').html(d);
  }

}())