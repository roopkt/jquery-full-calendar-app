// initializing event manager.
$(function () {
  var calendarApi = CalendarApi($, baseUrl, utility);
  var calendarManager = CalendarManager(calendarController, calendarApi, utility, logger);
  calendarManager.init();
});
