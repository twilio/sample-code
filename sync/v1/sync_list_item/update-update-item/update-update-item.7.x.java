// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.sync.v1.service.synclist.SyncListItem;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        SyncListItem syncListItem = SyncListItem.updater(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "MyCollection",
                0)
            .setData(
                new HashMap<String, Object>()
                {{
                    put("number", "001");
                    put("name", "Bulbasaur");
                    put("attack", 50);
                }})
            .update();

        System.out.println(syncListItem.getIndex());
    }
}