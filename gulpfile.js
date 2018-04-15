const gulp = require("gulp");
const { Transform } = require("stream");
const fs = require("fs");
const path = require("path");
var Remarkable = require("remarkable");
var md = new Remarkable({ html: true });

exports.buildDocs = function buildDocs() {
  return gulp
    .src("./docs/*.md")
    .pipe(
      new Transform({
        objectMode: true,
        transform(file, encoding, callback) {
          if (!file.isBuffer()) {
            return callback(null, file);
          }

          const outputFile = file.clone();
          const fileContent = outputFile.contents.toString(encoding);

          fs.readFile("./docs-template.html", (error, content) => {
            if (error) throw new Error(error);

            const htmlContent = md.render(fileContent);

            const resultContent = content
              .toString()
              .replace("$CONTENT", htmlContent);

            outputFile.contents = Buffer.from(resultContent);

            const parsedPath = path.parse(outputFile.path);
            outputFile.path = path.join(
              parsedPath.dir,
              parsedPath.name + ".html"
            );
            callback(null, outputFile);
          });
        }
      })
    )
    .pipe(gulp.dest("./docs-html/"));
};
