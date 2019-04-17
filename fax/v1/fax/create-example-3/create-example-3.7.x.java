// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.fax.v1.Fax;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Fax fax = Fax.creator(
                "sip:kate@example.com?hatchkey=4815162342;transport=TCP",
                URI.create("https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf"))
            .setFrom("Jack").create();

        System.out.println(fax.getSid());
    }
}