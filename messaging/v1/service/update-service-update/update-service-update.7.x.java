// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.messaging.v1.Service;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Service service = Service.updater("MG2172dd2db502e20dd981ef0d67850e1a")
            .setInboundRequestUrl(URI.create("http://www.example.com"))
            .update();

        System.out.println(service.getFriendlyName());
    }
}