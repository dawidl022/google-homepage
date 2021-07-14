# Recreating Google's Homepage and Search Results page
## an introductory to HTML and CSS project for The Odin Project fundamentals course.

Recreated with a mobile-first approach using just HTML and CSS to match the
style and layout of the Google Homepage and the Search Results page as of June
2021. Although google uses the user agent to show a different flavour of the
webpage, I went for classic media queries using min-width.

After coming back to this project, I added some functionality using JavaScript
that I was unable to add with just HTML and CSS (or it would be really
tiresome), mostly for the much more challenging results page i.e making query
words bold in page descriptions, aligning two elements for responsiveness,
showing and hiding a section/pop-up, adding a class to the parent element when
its child had focus and clearing the searchbar.

What I learnt:
- How to rename branch in git: `git branch -m <old-name> <new-name>`

What I had difficulties with:
- Applying a style to the parent if the child had focus (searchbar). (I managed
  to do this with JavaScript)
- Getting a sub-menu to pop up (more nav on results page) using relative and
  absolute positioning
- Managing a larger code-base
- Having elements on a page align to one another (I used margins, paddings and
  JavaScript where necessary, although hard-coding values doesn't seem like the
  best solution)
- Getting `position: sticky` to work properly. It is sticky relative to its
  parent element. Therefore, a `header` has to be a direct child of `body` for it to appear throughout the whole page.
