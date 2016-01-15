// Base routes for default index/root path, about page, 404 error pages, and others..
exports.register = function(server, options, next){

    server.route([
        {
            method: 'GET',
            path: '/about',
            config: {
                handler: function(request, reply){
                    reply.view('about', {
                        title: 'About'
                    });
                },
                id: 'about'
            }
        },
        {
            method: 'GET',
            path: '/',
            config: {
                handler: function(request, reply){
                  // Render the view with the custom greeting
                    reply.view('index', {
                        title: 'Home'
                    });
                },
                id: 'index'
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            config: {
                handler: function(request, reply){
                    reply.view('404', {
                        title: '404 - Page Not Found'
                    }).code(404);
                },
                id: '404'
            }
        },
        {
            method: 'GET',
            path: '/api',
            config: {
                handler: function(request, reply){
                    reply('Your Api Response').code(200);
                },
                id: 'api'
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'base'
};