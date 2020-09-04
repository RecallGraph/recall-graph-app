<p align="center">
  <a href="https://github.com/RecallGraph/RecallGraph">
    <img alt="Recall Graph" src="https://gblobscdn.gitbook.com/spaces%2F-M6AJE9YH_n2VbBm2nRr%2Favatar-1595745006604.png" />
  </a>
</p>

RecallGraph is a versioned-graph data store - it retains all changes that its data (vertices and edges) have gone through to reach their current state. It supports point-in-time graph traversals, letting the user query any past state of the graph just as easily as the present.

_It is a [Foxx Microservice](https://www.arangodb.com/why-arangodb/foxx/) for [ArangoDB](https://www.arangodb.com/) that features VCS-like semantics in many parts of its interface, and is backed by a transactional event tracker. It is currently being developed and tested on ArangoDB v3.5 and v3.6, with support for v3.7 in the pipeline._


## _Installation_


**From the Release Bundle**

RecallGraph installs like any other Foxx Microservice inside a database, on an ArangoDB instance.

1. Download the [latest release](https://github.com/adityamukho/RecallGraph/releases/).
2. Follow the instructions in the [Foxx Deployment Manual](https://www.arangodb.com/docs/3.6/foxx-deployment.html). The web interface is the  easiest, while the foxx-cli is more suitable for power users.


**From Source**

1. Install ArangoDB and create a database and a user with admin privileges for that database.
2. Install the Foxx CLI:

```shell
$ npm install --global foxx-cli
```

3. Assuming the database created in step 1 above is called rgtest and the admin user for that database is rguser having password rgpasswd, define a server endpoint for Foxx CLI:

```shell
$ foxx server set local-rgtest http://localhost:8529 -D rgtest -u rguser -P
```
Enter rgpasswd at the prompt and press Enter to finish the server definition step.

4. Clone this repository:

```shell
$ git clone https://github.com/RecallGraph/RecallGraph.git
```
5.Install module dependencies:

```shell
$ npm install
```

6.Copy .env.example to .env and set the following values:

```shell
ARANGO_SERVER=local-rgtest
EVSTORE_MOUNT_POINT=/recall
```
The mounted service will be available at http://localhost:8529/_db/rgtest/recall after the installation is complete.


7.Install the service:

```shell
$ npm run setup
```

Now that the service has been installed, you can browse its API and settings by logging into your ArangoDB instance's web API using the credentials used above and selecting the rgtest database. Once logged in, click on the Services tab in the left sidebar and you should find the RecallGraph service listed there.


## Contributing

....

## License

[MIT](https://choosealicense.com/licenses/mit/)
