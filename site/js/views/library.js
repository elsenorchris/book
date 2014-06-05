// site/js/views/library.js

var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events: {
        'click #add': 'addBook'
    },

    initialize: function( initialBooks ) {
        this.collection = new app.Library( initialBooks );
        this.collection.fetch({reset: true});
        this.render();
        this.collection.on( 'add', this.renderBook, this );
        this.collection.on( 'reset',this.render,this);
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    addBook: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
        if( $( el ).val() != '' )
        {
            formData[ el.id ] = $( el ).val();
            console.log(i);
        }
    });

    console.log(this.collection);
    this.collection.create(formData);
    },


});