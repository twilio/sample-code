// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.Workspace;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Workspace workspace = Workspace.creator("NewWorkspace")
            .setEventCallbackUrl(
                URI.create("http://requestb.in/vh9reovh"))
            .setTemplate("FIFO")
            .create();

        System.out.println(workspace.getSid());
    }
}