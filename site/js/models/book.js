// site/js/models/book.js

var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/smile.jpeg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None',
    },

    idAttribute: '_id',

    parse: function( response ) {
        response.id = response._id;
        console.log('hi');
        return response;
    }
});