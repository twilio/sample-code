// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.sync.v1.service.syncmap.SyncMapItem;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        SyncMapItem syncMapItem = SyncMapItem.updater(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "Players",
                "steph_curry")
            .setData(
                new HashMap<String, Object>()
                {{
                    put("name", "Stephen Curry");
                    put("level", 31);
                    put("username", "spicy_curry");
                }})
            .update();

        System.out.println(syncMapItem.getKey());
    }
}