// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.autopilot.v1.assistant.Task;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Task task = 
            Task.creator("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "tell-a-joke")
            .setFriendlyName("tell-a-joke")
            .setActions(
                new HashMap<String, Object>()
                {{
                    put("actions", new HashMap<String, Object>()
                    {{
                        put("say", new HashMap<String, Object>()
                        {{
                            put("speech", "I was going to look for my missing watch, but I could never find the time.");
                        }});
                    }});
                }})
            .create();

        System.out.println(task.getSid());
    }
}