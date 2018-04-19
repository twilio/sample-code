// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.messaging.v1.service.ShortCode;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ShortCode shortCode = ShortCode.fetcher(
                "MG2172dd2db502e20dd981ef0d67850e1a",
                "SC3f94c94562ac88dccf16f8859a1a8b25")
            .fetch();

        System.out.println(shortCode.getSid());
    }
}