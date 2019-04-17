// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.messaging.v1.service.PhoneNumber;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        PhoneNumber phoneNumber = PhoneNumber.creator(
                "MG2172dd2db502e20dd981ef0d67850e1a",
                "PN2a0747eba6abf96b7e3c3ff0b4530f6e")
            .create();

        System.out.println(phoneNumber.getSid());
    }
}