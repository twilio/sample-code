// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.proxy.v1.service.Session;
import org.joda.time.DateTime;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Session session = Session.updater(
                "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setDateExpiry(new DateTime(2008, 1, 2, 0, 0)).update();

        System.out.println(session.getUniqueName());
    }
}