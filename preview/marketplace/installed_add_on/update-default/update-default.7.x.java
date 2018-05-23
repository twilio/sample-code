// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.preview.marketplace.InstalledAddOn;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        InstalledAddOn installedAddOn = InstalledAddOn.updater(
                "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setConfiguration(new HashMap<String, Object>())
            .update();

        System.out.println(installedAddOn.getFriendlyName());
    }
}