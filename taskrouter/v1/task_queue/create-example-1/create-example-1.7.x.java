// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.TaskQueue;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        TaskQueue taskQueue = TaskQueue.creator(
                "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",    "English")
            .setAssignmentActivitySid(
                "WA21d51f4c72583766988f9860de3e130a")
            .setReservationActivitySid(
                "WAea296a56ebce4bfbff0e99abadf16934")
            .setTargetWorkers("languages HAS \"english\"")
            .create();

        System.out.println(taskQueue.getSid());
    }
}