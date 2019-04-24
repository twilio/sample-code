// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Conference;
import org.joda.time.LocalDate;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Conference> conferences = Conference.reader()
            .setDateCreated(new LocalDate(2009, 7, 6))
            .setStatus(Conference.Status.COMPLETED)
            .limit(20)
            .read();

        for(Conference record : conferences) {
            System.out.println(record.getSid());
        }
    }
}