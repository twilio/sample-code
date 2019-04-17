// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.worker.WorkerChannel;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        WorkerChannel workerChannel = WorkerChannel.fetcher(
                "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "WCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .fetch();

        System.out.println(workerChannel.getTaskChannelUniqueName());
    }
}