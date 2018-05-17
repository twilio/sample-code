// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.sync.v1.service.Document;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Document document = Document.updater(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "MyFirstDocument")
            .setData(
                new HashMap<String, Object>()
                {{
                    put("date_updated", "2018-02-14 12:24:33.889341");
                    put("movie_title", "On The Line");
                    put("show_times", null);
                    put("starring", new String [] {
                        "Lance Bass",
                        "Joey Fatone"
                    });
                    put("genre", "Romance");
                }})
            .update();

        System.out.println(document.getUniqueName());
    }
}