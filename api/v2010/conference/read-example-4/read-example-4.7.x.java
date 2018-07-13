// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.converter.DateConverter;
import com.twilio.rest.api.v2010.account.Conference;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Conference> conferences = Conference.reader()
            .setDateCreated(DateConverter.localDateFromString("2009-07-06"))
            .setStatus(Conference.Status.IN_PROGRESS)
            .read();

        for(Conference record : conferences) {
            System.out.println(record.getSid());
        }
    }
}