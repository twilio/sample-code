// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Application;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Application application = 
            Application.updater("AP2a0747eba6abf96b7e3c3ff0b4530f6e")
            .setSmsUrl(URI.create("http://demo.twilio.com/docs/sms.xml"))
            .setVoiceUrl(URI.create("http://demo.twilio.com/docs/voice.xml"))
            .update();

        System.out.println(application.getFriendlyName());
    }
}