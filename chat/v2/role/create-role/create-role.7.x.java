// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.chat.v2.service.Role;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Role role = Role.creator(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "new_role",
                Role.RoleType.DEPLOYMENT,
                Promoter.listOfOne("createChannel"))
            .create();

        System.out.println(role.getSid());
    }
}