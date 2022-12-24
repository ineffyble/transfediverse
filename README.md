# Welcome to [TransFediverse](https://transfediverse.org)

This is the official repository of the site that is used to help promote the Trans Fediverse.

Adapted from the amazing [FurryFediverse](https://github.com/CyberFurz/furryfediverse-site) by CyberFurz.

This is very much a WIP/mess. Initially attempting to make minimal code changes from furryfediverse to allow for easy upstream syncs.  


# Contribution

If you want to quickly start to contribute you can start the project with the
following set of commands:

```
yarn
DATABASE_URL=file://`pwd`/db.sqlite3 yarn run prisma migrate dev
DATABASE_URL=file://`pwd`/db.sqlite3 yarn dev
```

And then just go on http://localhost:3000 with your webbrowser.
