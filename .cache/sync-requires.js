const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/templates/blog-post.js"))),
  "component---src-templates-tag-page-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/templates/tag-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/tags.js"))),
  "component---src-pages-top-10-js": hot(preferDefault(require("/Users/migueldeguzmandev/Desktop/projects/blog-V2/src/pages/top10.js")))
}

