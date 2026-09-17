# Personal site (GitHub Pages)

Jekyll source for [luorix1.github.io](https://luorix1.github.io). Content and layout live in `_pages/`, `_data/`, `_layouts/`, and `assets/css/`.

## Running locally (recommended)

From the repository root, install dependencies once:

```bash
bundle install
```

**Start the preview server** (serves on port **4000**, uses polling so it works on Linux systems with low inotify limits, and enables LiveReload on port **35729**):

```bash
chmod +x bin/serve   # once, if needed
./bin/serve
```

That runs:

```text
bundle exec jekyll serve --host 0.0.0.0 --port 4000 --force_polling --livereload --livereload-port 35729
```

Open **http://127.0.0.1:4000** or **http://localhost:4000**. After you save a file, the site rebuilds; refresh may happen automatically if LiveReload works in your browser.

**Notes**

- `bundle install` may require **Ruby 3+**. On older macOS system Ruby (2.6), the `Gemfile` pins `ffi` to help; using [Homebrew](https://brew.sh/)’s `ruby` or a version manager is still preferable.
- Optional: set a different LiveReload port with `LIVERELOAD_PORT=12345 ./bin/serve` (must match `livereload_port` in `_config.yml` if you change it).
- Plain equivalent without the script:  
   `bundle exec jekyll serve --host 0.0.0.0 --port 4000 --force_polling --livereload`
- A small plugin under `_plugins/` only affects local `jekyll serve` (GitHub Pages does not run custom plugins in safe mode). Production HTML does not include the LiveReload script.

### `Address already in use` on **4000** (or another HTTP port)

**4000** is where the site is served. That error means something else is already listening there—most often a **Jekyll** you started in another tab and did not stop.

1. List the process (macOS/Linux):

   ```bash
   lsof -iTCP:4000 -sTCP:LISTEN
   ```

2. Stop it: **Ctrl+C** in that terminal, or `kill <PID>` (the PID is in the second column of `lsof` output).

**Or use a free port** (example **4001**):

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4001 --livereload --livereload-port 8050
```

Then open **http://127.0.0.1:4001** (and keep `livereload_port` in `_config.yml` in sync with your `--livereload-port` if you use browser LiveReload).

### `no acceptor` / port in use on **35729** (LiveReload)

**35729** (or whatever you pass as `--livereload-port`) is the LiveReload WebSocket port. A previous `jekyll serve` can still be holding it.

1. Stop other Jekyll servers (the terminal where it is running, or **Ctrl+C**).
2. See what is holding the port:

   ```bash
   lsof -iTCP:35729 -sTCP:LISTEN
   lsof -iTCP:4000 -sTCP:LISTEN
   ```

3. End that process, e.g. `kill <PID>`, or with care: `kill -9 <PID>`.

**Serve without LiveReload** (frees 35729 and avoids WebSocket issues):

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

**Use a different LiveReload port** (e.g. 35730): set the same value in `_config.yml` as `livereload_port` and run:

```bash
LIVERELOAD_PORT=35730 ./bin/serve
```

(If you only change the CLI flag and not `_config.yml`, the script URL in the layout may still point at the old port.)

## Editing content

| What | Where |
|------|--------|
| Name, bio, social links, site title | `_config.yml` → `author`, `title`, `description` |
| Top nav (Home / Research / Presentations) | `_data/navigation.yml` |
| Home page about text | `_pages/about.md` |
| Research (selected pubs; Scholar for full list) | `_data/publications.yml` (`type`, `abstract` markdown preview, optional `project_url`) |
| Presentations | `_data/presentations.yml` |
| Resume (download) | `files/Hwang_Jinwoo_Resume.docx` (`author.resume` in `_config.yml`) |

## Using Docker (optional)

If you prefer Docker and have a `Dockerfile` in the repo:

```bash
docker build -t jekyll-site .
docker run -p 4000:4000 -p 35729:35729 --rm -v "$(pwd)":/usr/src/app jekyll-site
```

(Ports may need to match how your image invokes Jekyll; adjust as needed.)

## License

This project started from the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template (MIT), which in turn builds on [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/) (MIT). See `LICENSE` if present in the tree.
