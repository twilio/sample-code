// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Binding;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
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
            .setTag(Promoter.listOfOne("preferred device"))
            .create();

        System.out.println(binding.getSid());
    }
}