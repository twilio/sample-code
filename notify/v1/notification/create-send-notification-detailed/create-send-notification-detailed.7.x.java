// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setBody("This is the body for all Bindings")
            .setTitle("Generic loooooooong title for all Bindings")
            .setData(
                new HashMap<String, Object>()
                {{
                    put("custom_key1", "custom value 1");
                    put("custom_key2", "custom value 2");
                }})
            .setApn(
                new HashMap<String, Object>()
                {{
                    put("aps", "{'alert': {'title': 'Short title for Watch.'}}");
                }})
            .setFcm(
                new HashMap<String, Object>()
                {{
                    put("notification", "{'title': 'New alert', 'body': 'Hello Bob!'}");
                }})
            .setIdentity(Promoter.listOfOne("identity"))
            .create();

        System.out.println(notification.getSid());
    }
}