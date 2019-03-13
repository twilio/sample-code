// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.autopilot.v1.Assistant;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Assistant assistant = Assistant.creator()
            .setFriendlyName("Styled Assistant")
            .setUniqueName("styled-assistant")
            .setStyleSheet(
                new HashMap<String, Object>()
                {{
                    put("voice", new HashMap<String, Object>()
                    {{
                        put("say_voice", "Polly.Joanna");
                    }});
                }})
            .create();

        System.out.println(assistant.getSid());
    }
}