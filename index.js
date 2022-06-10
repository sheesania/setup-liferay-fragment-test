const fs = require("fs");
const path = require("path");
const Freemarker = require("freemarker");

module.exports = (configuration, namespace, done) => {
  const fragmentConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, "fragment.json"))
  );
  const { cssPath, htmlPath, jsPath } = fragmentConfig;

  const css = fs.readFileSync(path.join(__dirname, cssPath));
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  const html = fs.readFileSync(path.join(__dirname, htmlPath));
  const freemarker = new Freemarker({ tagSyntax: "squareBracket" });
  freemarker.render(
    html,
    {
      fragmentEntryLinkNamespace: namespace,
      configuration: configuration,
    },
    (err, freemarkerResult) => {
      if (err) {
        throw new Error(err);
      }

      const div = document.createElement("div");
      div.innerHTML = freemarkerResult;
      document.body.appendChild(div);

      window.fragmentElement = div;
      window.fragmentNamespace = namespace;
      window.configuration = configuration;
      require("./" + jsPath);
      done();
    }
  );
}
