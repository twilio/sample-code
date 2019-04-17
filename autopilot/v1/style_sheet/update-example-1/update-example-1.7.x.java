// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.autopilot.v1.assistant.StyleSheet;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        StyleSheet styleSheet = 
            StyleSheet.updater("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setStyleSheet(
                new HashMap<String, Object>()
                {{
                    put("style_sheet", new HashMap<String, Object>()
                    {{
                        put("voice", new HashMap<String, Object>()
                        {{
                            put("say_voice", "Polly.Joanna");
                        }});
                    }});
                }})
            .update();

        System.out.println(styleSheet.getAssistantSid());
    }
}