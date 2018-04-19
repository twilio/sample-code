// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.converter.DateConverter;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Binding;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Binding> bindings = 
            Binding.reader("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setStartDate(DateConverter.localDateFromString("2015-08-25"))
            .setTag(Promoter.listOfOne("new user"))
            .read();

        for(Binding record : bindings) {
            System.out.println(record.getSid());
        }
    }
}