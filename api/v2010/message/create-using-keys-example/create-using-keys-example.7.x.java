// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class Example {
    // Find your Account Sid at twilio.com/console
    // Provision API Keys at twilio.com/console/runtime/api-keys
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String API_KEY = "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String API_SECRET = "your_api_secret";

    public static void main(String[] args) {
        Twilio.init(API_KEY, API_SECRET, ACCOUNT_SID);
        Message message = Message.creator(
                new com.twilio.type.PhoneNumber("+15558675310"),
                new com.twilio.type.PhoneNumber("+15017122661"),
                "Never gonna give you up.")
            .create();

        System.out.println(message.getSid());
    }
}