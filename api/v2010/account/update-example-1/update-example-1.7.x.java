// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.Account;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Account account = Account.updater("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setStatus(Account.Status.SUSPENDED).update();

        System.out.println(account.getFriendlyName());
    }
}