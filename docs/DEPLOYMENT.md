# GitHub Pages deployment

Repository: `mostafa-kermaninia/mostafa-kermaninia.github.io`

Public URL: https://mostafa-kermaninia.github.io/

The existing Pages configuration publishes the root of `gh-pages`. Source is on `main`; `dist/` is generated, ignored output. No custom-domain or Pages-source setting change is required.

## Validate and publish

Requires an authenticated Git account with push access. Run from the source checkout:

```sh
npm run check
npm test
git add -A
git commit -m "Update portfolio"
git push origin main
git worktree add ../portfolio-pages gh-pages
```

Copy the **contents** of `dist/` into the publication worktree, replacing the old generated site. Preserve the worktree’s `.git` file. Commit the generated changes, then push:

```sh
git -C ../portfolio-pages add -A
git -C ../portfolio-pages commit -m "Publish portfolio build"
git -C ../portfolio-pages push origin gh-pages
git worktree remove ../portfolio-pages
```

Only the generated site belongs on `gh-pages`, not the source checkout or build tooling. Keep `.nojekyll`. GitHub’s existing Pages build/deployment runs after the branch push; check the Actions result and verify the public homepage and a nested project URL.

The `Site checks` workflow runs checks on source pushes and pull requests. It does not publish. This avoids silently changing the established Pages deployment configuration or introducing a deployment secret.

## Routing

The build emits real directories such as `work/videomap/index.html`. Direct visits and refreshes resolve without a client router. The previous three `/case-study/` paths have static redirect pages, with a visible link as fallback. Unknown URLs serve `404.html` with an actual error response.

## Roll back

Prefer reverting the publication commit on `gh-pages` and pushing the revert. This preserves history and triggers another Pages deployment. Revert the corresponding source commit separately if the source also needs to return to the previous version. Do not force-push shared branch history.

## Operations

- No server runtime, database, API key, login, or third-party form endpoint is required.
- Contact uses `mailto:`; clipboard copy is a convenience and reports failure honestly.
- The main font and portrait are local assets.
- `build-info.json` records the site version, content review date, and generated routes.
- Re-run build/tests after content changes. Review layout in real browsers when changing CSS; automated tests do not certify visual quality.
