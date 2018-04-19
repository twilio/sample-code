// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.http.HttpMethod;
import com.twilio.rest.api.v2010.account.queue.Member;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Member member = Member.updater(
                "QUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                URI.create("https://example.com"),
                HttpMethod.GET)
            .update();

        System.out.println(member.getCallSid());
    }
}