package rest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by foobarkilla on 11.09.16.
 */
@RestController
public class GreetingController {

    private static final String         template  = "Hello, %s!";
    private final        AtomicLong     counter   = new AtomicLong();
    private              List<Greeting> greetings = new ArrayList<>();



    GreetingController() {
        for ( int i = 0; i < 2; i++ ) {
            greeting( "Test " + i );
        }
    }



    @RequestMapping( "/greetings" )
    public List<Greeting> greetings() {
        return greetings;
    }



    @PostMapping( "/greeting" )
    public Greeting greeting( @RequestBody String name ) {
        Greeting greeting = new Greeting( counter.incrementAndGet(),
                                          String.format( template, name ) );
        greetings.add( greeting );
        return greeting;
    }



    @RequestMapping( "/greeting/{id}" )
    public Greeting getGreeting( @PathVariable long id ) {
        return greetings.stream().filter( greeting -> greeting.getId() == id ).findFirst().get();

    }

}
