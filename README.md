<h1>Next.js + Rails Kanban Application</h1>
<h2>Description</h2>
<p>A simple Kanban application using Next.js for the front-end and a Rails API for the back-end.</p>
<h2>Prerequisites</h2>
<ul>
    <li>
        <a href="https://www.docker.com/get-started">Docker</a>
    </li>
    <li>
        <a href="https://nodejs.org/en/">Node.js</a>
    </li>
    <li>
        <a href="https://classic.yarnpkg.com/en/docs/install#windows-stable">Yarn</a>
    </li>
</ul>
<h2>Running Locally</h2>
<h3>Backend</h3>
<p>To run the Ruby API and PostgreSQL database with Docker, enter the following commands into the console:</p>

```
$ cd ./backend
$ docker-compose up
```

<p>"docker-compose up" will build the appropriate images for the API and database, and run them in a container. The container will expose the API to http://localhost:3000 on the host machine.</p>

<p>*Note*: If this is your first time running the API and database after building the images you will also have to run:</p>

```
$ docker-compose run api rails db:create 
$ docker-compose run api rails db:migrate
```

<p>This will configure the database for the Rails app.</p>

<p></p>
<h3>Frontend</h3>
<p>To run the front-end Next.js application, enter the following commands into the console:</p>

```
$ cd ./frontend
$ yarn install
$ yarn dev
```

<p>After running the dev command the Next.js application will be available at http://localhost:3001</p>