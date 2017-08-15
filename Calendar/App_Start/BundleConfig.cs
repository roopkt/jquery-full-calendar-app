using System.Web;
using System.Web.Optimization;

namespace Calendar
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Scripts/lib/full-calendar/fullcalendar.min.css",
                "~/Content/bootstrap.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/lib/full-calendar/jquery.min.js",
                "~/Scripts/bootstrap.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/fullcalendar").Include(
                "~/Scripts/lib/full-calendar/moment.min.js",
                "~/Scripts/lib/full-calendar/fullcalendar.min.js",
                "~/Scripts/lib/full-calendar/jquery-ui.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app/infrastructure/pub-sub.js",
                "~/Scripts/app/infrastructure/utility.js",
                "~/Scripts/app/infrastructure/logger.js",

                "~/Scripts/app/calendar/calendar-controller.js",
                "~/Scripts/app/calendar/calendar-api.js",
                "~/Scripts/app/calendar/calendar-manager.js",
                "~/Scripts/app/main.js"
                ));

        }
    }
}
