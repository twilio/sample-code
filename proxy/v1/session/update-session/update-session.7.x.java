// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.proxy.v1.service.Session;
import org.joda.time.DateTime;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Session session = Session.updater(
                "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setDateExpiry(new DateTime(2018, 7, 31, 0, 0))
            .setStatus(Session.Status.IN_PROGRESS)
            .update();

        System.out.println(session.getUniqueName());
    }
}