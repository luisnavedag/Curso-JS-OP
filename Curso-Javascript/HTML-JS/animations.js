new TypeIt("#simpleUsage", {
    strings: "",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  new TypeIt(".multipleStrings", {
    strings: ["Soy el mejor", "No, el mejor soy YO"],
    speed: 50,
    waitUntilVisible: true,
  }).go();