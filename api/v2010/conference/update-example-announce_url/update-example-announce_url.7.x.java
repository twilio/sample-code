// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Conference;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Conference conference = 
            Conference.updater("CFbbe46ff1274e283f7e3ac1df0072ab39")
            .setAnnounceUrl(URI.create("http://www.myapp.com/announce"))
            .update();

        System.out.println(conference.getFriendlyName());
    }
}