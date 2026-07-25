# Academic project page template

Scaffold modeled on [Continual Online Personalization](https://changseob-song.github.io/continual-online-personalization/) (dark navy hero, highlight cards, scenario videos, method pair, stats, BibTeX), integrated into this Jekyll site.

## Files

| Path | Role |
|------|------|
| `_layouts/project-page.html` | Layout: dark hero, highlights, body, stats, BibTeX |
| `assets/css/project-page.css` | Styles |
| `assets/js/project-page.js` | Copy BibTeX + scroll-to-top |
| `_includes/project-video.html` | Video card section |
| `_includes/project-video-pair.html` | Two side-by-side videos |
| `_includes/project-figure.html` | Figure + caption |
| `_includes/project-method-pair.html` | Two-column method figures |
| `_includes/project-pullquote.html` | Italic bridge sentence |
| `_pages/projects/_TEMPLATE.md` | Minimal starter |
| `_pages/projects/placeholder.md` | Live fill-in page at `/projects/placeholder/` |

## Create a page

```bash
cp _pages/projects/placeholder.md _pages/projects/my-project.md
# or
cp _pages/projects/_TEMPLATE.md _pages/projects/my-project.md
```

1. Set `title`, `permalink`, `authors`, `affiliations`, `links`.
2. Set `presentation_video`, fill `highlights` (3 cards) and `stats`.
3. Put media under `images/projects/<slug>/` and set `src` on body includes.
4. Add an entry to `_data/projects.yml`.
5. Preview: `./bin/serve` → `http://localhost:4000/projects/my-project/`.

## Page structure (matches the reference)

1. **Dark hero** — title, authors (`·` separators), affiliation, Paper / arXiv buttons  
2. **Presentation video** — `presentation_video` in front matter (lifted over hero fade)  
3. **Why this matters** — three feature cards (`highlights`)  
4. **Pull quote** — italic bridge text (body include)  
5. **Scenario videos** — titled sections with optional light subtitle  
6. **Framework figure**  
7. **Method** — two-column figures  
8. **Main results** — stat cards + optional figure (`stats` / `stats_figure`)  
9. **BibTeX** — copy button  

## Front matter

| Key | Purpose |
|-----|---------|
| `layout: project-page` | Required |
| `title`, `permalink`, `description` | Basics |
| `summary` | Optional one-liner under title in the hero |
| `authors` | `{ name, url?, equal? }` — separators are `·` |
| `affiliations` | Under authors |
| `links` | Buttons: `{ label, url, icon }` (`paper`, `arxiv`, `github`, …) |
| `presentation_video` | Hero video path/URL |
| `highlights` / `highlights_title` | Feature cards (`icon` = Font Awesome name without `fa-`) |
| `stats` / `stats_title` / `stats_figure` / `stats_caption` | Results strip |
| `bibtex` | Citation block |
| `teaser` | Open Graph image |

## Includes (body)

```liquid
{% include project-pullquote.html text="..." %}
{% include project-video.html title="Scenario 1:" title_light="Subtitle" lead="..." src="..." narrow=true %}
{% include project-figure.html title="Framework at a glance" src="..." caption="..." narrow=true %}
{% include project-method-pair.html title="Method" left_title="..." left_src="..." left_caption="..." right_title="..." right_src="..." right_caption="..." %}
```

Delete or duplicate sections as needed. Placeholder boxes appear until you set `src`.
