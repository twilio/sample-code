// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.preview.sync.service.syncmap.SyncMapItem;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        SyncMapItem syncMapItem = SyncMapItem.updater(
                "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "pathKey",
                new HashMap<String, Object>())
            .update();

        System.out.println(syncMapItem.getKey());
    }
}