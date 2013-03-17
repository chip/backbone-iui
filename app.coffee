jQuery ->
  class Client extends Backbone.Model
    defaults:
      name: 'NYU'
      email: 'nyu@example.com'
      address: '5th Ave.'

  class ClientList extends Backbone.Collection
    model: Client

    initialize: ->
      @add new Client email: 'foo@example.com', name: 'Foo'
      @add new Client email: 'bar@example.com', name: 'Bar'
      @add new Client email: 'baz@example.com', name: 'Baz'

  class ClientView extends Backbone.View
    el: $("#content")
    template: _.template $("#client-template").html()

    render: =>
      $(@el).append @template @model.toJSON()

  class ClientListView extends Backbone.View
    el: $('#content')
    url: '/clients'

    initialize: ->
      @collection = new ClientList()
      @render()

    render: =>
      for index, client of @collection.models
        client_view = new ClientView model: client
        $(@el).append client_view.render().el
      @

  class ClientForm extends Backbone.View
    initialize: ->
      @client = new Client()
      @render()

    el: $('#content')

    render: =>
      $(@el).html """
        <form id="client-form" title="Add Client" name="client-form" action="" method="GET">
          <input type="text" id="client-name" placeholder="Name">
          <input type="text" id="client-email" placeholder="Email address">
          <a class="whiteButton" id="client-submit">Save</a>
        </form>
      """
      @

    events:
      'click #client-submit': 'create'

    create: (event) ->
      event.preventDefault()
      client =
        name: @$('#client-name').val()
        email: @$('#client-email').val()
      @collection.add client

  #client_form = new ClientForm()
  new ClientListView()

