// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.autopilot.v1.assistant.Defaults;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Defaults defaults = 
            Defaults.updater("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setDefaults(
                new HashMap<String, Object>()
                {{
                    put("defaults", new HashMap<String, Object>()
                    {{
                        put("assistant_initiation", "task://hello-world");
                        put("fallback", "task://hello-world");
                    }});
                }})
            .update();

        System.out.println(defaults.getAssistantSid());
    }
}