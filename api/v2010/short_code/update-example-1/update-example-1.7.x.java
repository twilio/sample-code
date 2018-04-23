// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.ShortCode;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ShortCode shortCode = 
            ShortCode.updater("SC6b20cb705c1e8f00210049b20b70fce3")
            .setSmsUrl(URI.create("http://demo.twilio.com/docs/sms.xml"))
            .update();

        System.out.println(shortCode.getFriendlyName());
    }
}