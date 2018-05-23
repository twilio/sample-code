// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.preview.hostedNumbers.HostedNumberOrder;
import com.twilio.type.PhoneNumber;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        HostedNumberOrder hostedNumberOrder = HostedNumberOrder.creator(
                new com.twilio.type.PhoneNumber("+15017122661"),
                true)
            .create();

        System.out.println(hostedNumberOrder.getSid());
    }
}