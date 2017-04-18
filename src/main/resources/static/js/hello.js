/**
 * Created by jojoldu@gmail.com on 2017. 4. 18.
 * Blog : http://jojoldu.tistory.com
 * Github : http://github.com/jojoldu
 */

import Woowahan from 'woowahan';

const Main = Woowahan.View.create('Main', {
    template: '<h1>Hello, WoowahanJs</h1>'
});

const app = Woowahan();

app.start({
    url:'/', container: 'body', view: Main
});

