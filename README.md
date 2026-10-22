# AI Club website

A one-page website for a student AI club, in white and green. It's plain HTML, CSS and JavaScript, so it has no build step and nothing to install.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All of the page's content. Edit this to change text, events and links. |
| `styles.css` | Colors, fonts and layout. The colors are variables at the top of the file. |
| `script.js` | The mobile menu, the header shadow, and the fade-in effect as you scroll. |

## View it

Double-click `index.html` to open it in your browser.

Or serve it locally, which is closer to how it'll behave once it's online:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000.

## Make it yours

Look for `EDIT ME` comments in `index.html`:

- **Events**: the three events are examples. Change the dates, titles, times and rooms.
- **Email**: `aiclub@example.edu` is a placeholder. Use the club's real address.
- **Club name**: search for "AI Club" and replace it with your club's name.

To change the colors, edit the `--green-*` variables at the top of `styles.css`.

## Put it online for free

1. Push this repository to GitHub.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, pick **Deploy from a branch**, choose `main` and `/ (root)`, and save.

The site shows up at `https://<your-username>.github.io/<repository-name>/` after a minute or two.
