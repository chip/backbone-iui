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
      console.log 'collection initialize'

  class ClientListView extends Backbone.View
    el: $('#index')
    url: '/clients'

    initialize: ->
      @collection = new ClientList()
      console.log @collection
      console.log 'ClientList'
      @render()
    
    render: =>
      console.log 'render'
      json = @collection.toJSON()
      console.log 'json:' + json
      console.log 'el:' + @el
      #$(@el).html json
      console.log client for client in @collection
      #  $(@el).html "#{client.name} : #{client.email}"

      @

  class ClientForm extends Backbone.View
    initialize: ->
      @client = new Client()
      console.log 'ClientForm'
      #@collection = new ClientList
      #@collection.bind "add", @render
      #  alert client
      #$(@el).html @collection.toJSON()

      @render()

    el: $('#index')

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
      console.log 'create'
      console.dir client
      @collection.add client

  #client_form = new ClientForm()
  new ClientListView()

