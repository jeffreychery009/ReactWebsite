export interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface description {
  description: string;
}

export const description: string = `Looking for someone who loves to design, 
develop software, and create cool UI? You found the right person.`;
