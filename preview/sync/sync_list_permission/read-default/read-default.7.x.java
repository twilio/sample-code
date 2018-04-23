// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.preview.sync.service.synclist.SyncListPermission;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<SyncListPermission> syncListPermissions = 
            SyncListPermission.reader(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .read();

        for(SyncListPermission record : syncListPermissions) {
            System.out.println(record.getServiceSid());
        }
    }
}