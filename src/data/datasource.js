export let DATA = (function () {
  return {
    NAVIGATION: [
      {
        id: "main",
        text: "Main",
        isActive: true
      },
      {
        id: "general",
        text: "General information",
        isActive: false
      },
      {
        id: "blog",
        text: "Blog",
        isActive: false
      },
      {
        id: "about",
        text: "About",
        isActive: false
      },

    ],
    ATTENDERS: [
      {
        id: 1,
        name: "John Lennon",
        rank: "2",
        rate: "2234",
        selected: false
      },
      {
        id: 2,
        name: "Roland Diskein",
        rank: "1",
        rate: "19",
        selected: false
      },
      {
        id: 3,
        name: "Jake Chaimberth",
        rank: "3",
        rate: "1999",
        selected: false
      },

    ],
    PAGES: [
      {
        id: "main",
        header: "Main Page",
        content: ""
      },
      {
        id: "general",
        header: "General information",
        content: "This site only for test proposes"
      },
      {
        id: "about",
        header: "About",
        content: "Site developed and maintaining by ehalavachou"
      }
    ],
    BLOG: [
      {
        id: "1",
        name: "Post#1",
        content: "Blog post content#1",
        author: "jim@kirk.ru",
        isEdit: false,
        isComments: false
      },
      {
        id: "2",
        name: "Post#2",
        content: "Blog post content#2",
        author: "robby@mail.cc",
        isEdit: false,
        isComments: false
      },
      {
        id: "3",
        name: "Post#3",
        content: "Blog post content#3",
        author: "spok@trek.ru",
        isEdit: false,
        isComments: false
      },
      {
        id: "4",
        name: "Post#4",
        content: "Blog post content#4",
        author: "ted@bordigen.ru",
        isEdit: false,
        isComments: false
      },
    ],
    MODERATORS: [
      "ted@bordigen.ru", "jim@kirk.ru", "robby@mail.cc"
    ]
  }
})();
