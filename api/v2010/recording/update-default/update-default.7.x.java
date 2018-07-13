// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.conference.Recording;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Recording recording = Recording.updater(
                "CFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                Recording.Status.IN_PROGRESS)
            .setPauseBehavior("pauseBehavior").update();

        System.out.println(recording.getCallSid());
    }
}