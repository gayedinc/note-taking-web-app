import AllNotes from "./components/AllNotes.jsx";
import ArchivedNotes from "./components/ArchivedNotes.jsx";
import CreateNote from "./components/CreateNote.jsx";

const routes = [
  {
    title: "All Notes",
    url: "/",
    component: <AllNotes />
  },
  {
    title: "Archived Notes",
    url: "/archive",
    component: <ArchivedNotes />
  },
  {
    url: "/create-note",
    component: <CreateNote />
  },
  {
    url: "/tags",
    component: <Tags />,
  },
  {
    url: "/search",
    component: <Search />,
  },
  {
    title: "Settings",
    url: "/archive",
    component: <Settings />
  },
];

export function getPage(url) {
  return routes.find((x) => x.url === url) ?? null;
}