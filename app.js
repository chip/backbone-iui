// Generated by CoffeeScript 1.5.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  jQuery(function() {
    var Client, ClientForm, ClientList, ClientListView;
    Client = (function(_super) {

      __extends(Client, _super);

      function Client() {
        Client.__super__.constructor.apply(this, arguments);
      }

      Client.prototype.defaults = {
        name: 'NYU',
        email: 'nyu@example.com',
        address: '5th Ave.'
      };

      return Client;

    })(Backbone.Model);
    ClientList = (function(_super) {

      __extends(ClientList, _super);

      function ClientList() {
        ClientList.__super__.constructor.apply(this, arguments);
      }

      ClientList.prototype.model = Client;

      ClientList.prototype.initialize = function() {
        this.add(new Client({
          email: 'foo@example.com',
          name: 'Foo'
        }));
        this.add(new Client({
          email: 'bar@example.com',
          name: 'Bar'
        }));
        this.add(new Client({
          email: 'baz@example.com',
          name: 'Baz'
        }));
        return console.log('collection initialize');
      };

      return ClientList;

    })(Backbone.Collection);
    ClientListView = (function(_super) {

      __extends(ClientListView, _super);

      function ClientListView() {
        this.render = __bind(this.render, this);
        ClientListView.__super__.constructor.apply(this, arguments);
      }

      ClientListView.prototype.el = $('#index');

      ClientListView.prototype.url = '/clients';

      ClientListView.prototype.initialize = function() {
        this.collection = new ClientList();
        console.log(this.collection);
        console.log('ClientList');
        return this.render();
      };

      ClientListView.prototype.render = function() {
        var client, json, _i, _len, _ref;
        console.log('render');
        json = this.collection.toJSON();
        console.log('json:' + json);
        console.log('el:' + this.el);
        _ref = this.collection;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          client = _ref[_i];
          console.log(client);
        }
        return this;
      };

      return ClientListView;

    })(Backbone.View);
    ClientForm = (function(_super) {

      __extends(ClientForm, _super);

      function ClientForm() {
        this.render = __bind(this.render, this);
        ClientForm.__super__.constructor.apply(this, arguments);
      }

      ClientForm.prototype.initialize = function() {
        this.client = new Client();
        console.log('ClientForm');
        return this.render();
      };

      ClientForm.prototype.el = $('#index');

      ClientForm.prototype.render = function() {
        $(this.el).html("<form id=\"client-form\" title=\"Add Client\" name=\"client-form\" action=\"\" method=\"GET\">\n  <input type=\"text\" id=\"client-name\" placeholder=\"Name\">\n  <input type=\"text\" id=\"client-email\" placeholder=\"Email address\">\n  <a class=\"whiteButton\" id=\"client-submit\">Save</a>\n</form>");
        return this;
      };

      ClientForm.prototype.events = {
        'click #client-submit': 'create'
      };

      ClientForm.prototype.create = function(event) {
        var client;
        event.preventDefault();
        client = {
          name: this.$('#client-name').val(),
          email: this.$('#client-email').val()
        };
        console.log('create');
        console.dir(client);
        return this.collection.add(client);
      };

      return ClientForm;

    })(Backbone.View);
    return new ClientListView();
  });

}).call(this);
