// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setApn(new HashMap<String, Object>())
            .setBody("This is the body for all Bindings")
            .setData(new HashMap<String, Object>())
            .setFcm(new HashMap<String, Object>())
            .setIdentity(Promoter.listOfOne("00000001"))
            .setTitle("Generic loooooooong title for all Bindings")
            .create();

        System.out.println(notification.getSid());
    }
}