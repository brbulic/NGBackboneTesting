/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 11:11
 * To change this template use File | Settings | File Templates.
 */
<script src="js/vendor/jquery-1.9.0.min.js"></script>
<script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/backbone.js"></script>

    <script type="text/javascript">



    var Users = Backbone.Collection.extend({
        url: '/users'
        });

    var UserList = Backbone.View.extend({
        el: '.page',
        render: function () {
        var base = this;
        var users = new Users();
        users.fetch({
        success: function (users) {
        var template = _.template($('#user-list-template').html(), {users: users.models});
    base.$el.html(template);
    }
    });
    }
    });

    var userList = new UserList();
    var Router = Backbone.Router.extend({
        routes: {
        '': 'home'
        }
    }
    );

    var bigMama = new Router()

    var router = new Router();
    router.on('route:home', function () {
        userList.render();
        });

    Backbone.history.start();
    </script>
