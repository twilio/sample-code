// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.preview.understand.Assistant;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Assistant assistant = 
            Assistant.updater("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setUniqueName("quickstart-assistant")
            .setInitiationActions(
                new HashMap<String, Object>()
                {{
                    put("actions", new String [] {
                        new HashMap<String, Object>()
                        {{
                            put("say", new HashMap<String, Object>()
                            {{
                                put("speech", "Hello! How can I help you");
                            }});
                        }}
                    });
                }})
            .update();

        System.out.println(assistant.getFriendlyName());
    }
}