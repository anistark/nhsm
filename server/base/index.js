// Routes Basic


var Joi = require('joi');
var Contacts = require('../models/contacts').Contacts;


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
        },
        {
            method: 'POST',
            path: '/form',
            config: {
                validate: {
                    payload: {
                        name: Joi.string(),
                        email: Joi.string().email().required(),
                        content: Joi.string().required()
                    }
                },
                handler: function (request, reply) {
                    var newContact = new Contacts({
                        name: request.payload.name,
                        email: request.payload.email,
                        content: request.payload.content
                    });
                    newContact.save(function(err) {
                        if (err) console.log(err);
                        console.log('User Content Taken!');
                        reply.redirect('/');
                    });
                },
                id: 'form'
            }
        },
    ]);

    next();
}

exports.register.attributes = {
    name: 'base'
};