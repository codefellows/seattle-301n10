### Workaround for pushing to heroku database on windows machince.

#### Context:

The command `heroku pg:push` essentially executes two commands under the hood. First, it executes pg_dump, which makes a backup file of a specific database. Then, it pipes that file into pg_resotre, where it takes that dump file and uses it to restore another database. The way we usually use it is to push a local database to a deployed heroku database.

The problem is that on windows, the command breaks while trying to pipe in the backup file from pg_dump to pg_restore, so we need to do these two commands manually.


### Solution:

First, follow the steps in the pre-work to add psql to your path. If it's not, then you can't use the commands pg_dump and pg_restore.
Next, make sure you have a local database that you want to send to heroku. It must be filled with the tables that you want to use. Seeded data is optional, but can be helpful to test.

#### Make a dump file:

- After psql is added to your path, open your terminal and type psql. If you get prompted for a password then psql is working and we can move forward.
- Navigate to the project repo. This is where we are going to add our dump file. Note that you don't need to be in a specific repo, but the dump file will be added to where your PWD is currently at. Adding it to your project repo can be a good way to save it as well.
- Type in the command `PGPASSWORD=1234 pg_dump -U postgres -F c -c -O book_app  > out.sql`, replacing values as needed.
  - `PGPASSWORD` is the password for the user who owns the DB. If there's no password, then leave this off althogether.
  - `-U` is a flag for `--username`. By default it's `postgres` but if for some reason your DB owner is different, use that user after this flag instead of `postgres`.
  - `-F c` is a shortcut for `--format=c`. `c` Stands for custom. We are making a custom formatted file here.
  - `-c` stands for --clean. It tells the pg_dump command how to tear down the database.
  - `-O` stands for --no-owner. It says to not output commands for setting ownership for the database.
  - `book_app` is the name of the local database you to eventually push to heroku. 
  - Note the `>` after the command. This specifcally says we want to output this stuff into a file. Later when we do a restore we will use a `<` mean bring in.
  - `out.sql` can be named anything you want. I named it out.sql because it's the outputted file, and .sql because it's to do with sql
  
  
You may see some errors here, but if you check your directory you should see a new file called out.sql. If you do, then assume that it worked and try the next step.
  
#### Use the dump file to create your heroku database.
  
This step requires you to have a heroku app that's been setup with heroku postgres. You don't need to do anything with the CLI here as we will be doing all of this manually.
  
- First, navigate to your heroku app, click on resources, and click on the database to bring you to the database screen.
- Next, click on settings, and go to the database credentials. 
- You should see a screen that looks like [this.](https://imgur.com/a/xEtcu)
  - Note that this has the hostname, database, username, password, port, etc... You will need most of these for the next command.
  - You will type in this command, but you will replace your specific pieces of data into this command:
  - `PGUSER=mibaxbq PGPASSWORD=0bdf8bbc6930e026d pg_restore -h 'ec2-60-13.compute-1.amazonaws.com' -d d6n3tt6nc < out.sql`
    - `PGUSER & PGPASSWORD` are the username and password from the credentials you got inside heroku.
    - `-h` stands for hostname.
    - `-d` stands for database. (The database from the creds.)
    - `<` Note that this must be there and in this direction.
    - `out.sql` This is referring to the out file we used earlier.
    
If you typed this in correctly you WILL see a couple errors pop up. Ignore them for now and go back to heroku and check your database. You should see that there is a table added to your database.


Note that you should only be doing this command to initially create ( and optionally seed) the deployed database. If there database already has this table and there is data in it then this will fail.


### Docs:
Here are some docs specifically on the pg_dump and pg_restore commands:
  - [pg_dump](https://www.postgresql.org/docs/10/static/app-pgdump.html)
  - [pg_restore](https://www.postgresql.org/docs/10/static/app-pgrestore.html)
