// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.api.v2010.account.call.Recording;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Recording recording = 
            Recording.creator("CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setRecordingStatusCallback(
                URI.create("https://myapp.com/recording-events"))
            .setRecordingStatusCallbackEvent(
                Promoter.listOfOne("in-progress completed"))
            .setRecordingChannels("dual")
            .create();

        System.out.println(recording.getSid());
    }
}