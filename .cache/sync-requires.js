// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/vitalia/projects/bangl/gatsby-contentful-starter/src/templates/blog-post.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/vitalia/projects/bangl/gatsby-contentful-starter/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vitalia/projects/bangl/gatsby-contentful-starter/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/blog-automate-with-webhooks.json"),
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "blog-hello-world.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/blog-hello-world.json"),
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "blog-static-sites-are-great.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/blog-static-sites-are-great.json"),
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "blog-test.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/blog-test.json"),
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "blog.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/blog.json"),
  "layout-index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/layout-index.json"),
  "index.json": require("/home/vitalia/projects/bangl/gatsby-contentful-starter/.cache/json/index.json")
}