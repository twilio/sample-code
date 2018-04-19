// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.preview.sync.service.SyncList;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<SyncList> syncLists = 
            SyncList.reader("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .read();

        for(SyncList record : syncLists) {
            System.out.println(record.getSid());
        }
    }
}