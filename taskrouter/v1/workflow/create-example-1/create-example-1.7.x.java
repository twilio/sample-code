// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.Workflow;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Workflow workflow = Workflow.creator(
                "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "Sales, Marketing, Support Workflow",
                "{\"task_routing\": {\"filters\": [{\"expression\": \"type=='sales'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='marketing'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='support'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}], \"default_filter\": {\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}}}")
            .setAssignmentCallbackUrl(
                URI.create("http://example.com"))
            .setFallbackAssignmentCallbackUrl(
                URI.create("http://example2.com"))
            .setTaskReservationTimeout(30)
            .create();

        System.out.println(workflow.getSid());
    }
}