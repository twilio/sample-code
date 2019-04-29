// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.notify.v1.service.Binding;

import java.util.Arrays;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Binding binding = Binding.creator(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "00000001",
                Binding.BindingType.APN,
                "apn_device_token")
            .setEndpoint("endpoint_id")
            .setTag(Arrays.asList("preferred device"))
            .create();

        System.out.println(binding.getSid());
    }
}