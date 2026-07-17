# Family Social Graph

A responsive family-network visualization built with React Flow and Tailwind CSS. The interface presents family members, friends, partners, and children as connected profile nodes while preserving the visual structure of the supplied design reference.

## Features

- Data-driven React Flow nodes, junctions, and edges
- Color-coded relationship types
- Solid and dashed SVG connection lines
- Responsive layouts for desktop, tablet, and mobile devices
- Circular profile photos with consistent colored borders
- Clickable avatars with visual selection highlighting
- Keyboard-accessible avatar selection using Enter or Space
- Connection statistics, privacy information, and relationship legend
- Responsive icon tiles built with Google Material icons

## Technology

- [React](https://react.dev/) for UI components and interaction state
- [Vite](https://vite.dev/) for local development and production builds
- [React Flow](https://reactflow.dev/) for graph nodes, edges, and node interaction
- [Tailwind CSS](https://tailwindcss.com/) for layout, responsive design, and component styling
- SVG for the network illustration
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons
- CSS media queries, fluid sizing, and proportional graph scaling for responsiveness

## Getting Started

### Requirements

- Node.js 18 or newer
- npm 9 or newer

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Nat-Atana/familySocial.git
cd familySocial
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, typically `http://localhost:5173`.

## Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build
npm run preview  # Preview the production build locally
npm test         # Validate graph data and edge-handle configuration
```

The production output is generated in the `dist/` directory.

## Project Structure

```text
FamilySocialGraph/
├── src/
│   ├── components/   # Intro, statistics, privacy, legend, and icon components
│   ├── graph/
│   │   ├── PersonNode.jsx       # Custom accessible React Flow person node
│   │   ├── JunctionNode.jsx     # Invisible family-tree routing junction
│   │   ├── graphBuilder.js      # Converts domain data to nodes and edges
│   │   └── graphBuilder.test.js # Graph integrity tests
│   ├── App.jsx       # Tailwind-based page composition
│   ├── SocialGraph.jsx # Controlled React Flow state and interaction
│   ├── data.js       # Single source for people, junctions, edges, and metadata
│   ├── main.jsx      # React application entry point
│   └── styles.css    # Tailwind imports and graph-specific responsive rules
├── index.html
├── package.json
└── README.md
```

## Data Model

People are defined in `src/data.js`. Each person includes an ID, display name, graph coordinates, relationship type, and avatar URL:

```js
{
  id: 'father',
  name: 'Father',
  x: 360,
  y: 270,
  type: 'family',
  avatar: 'https://example.com/avatar.jpg'
}
```

Relationships reference people by ID:

```js
['father', 'you', 'family']
```

The relationship type determines the edge color and whether the line is solid or dashed.

## Customization

### Replace an avatar

Update the person's `avatar` value in `src/data.js`. Local images can be placed in `public/avatars/` and referenced as follows:

```js
avatar: '/avatars/father.jpg'
```

Local assets are recommended for reliable production deployment.

### Change graph positions

Modify the person's `x` and `y` coordinates in `src/data.js`. The graph uses a `760 × 900` design coordinate system and scales proportionally on smaller screens.

### Change relationship colors

Edit the `relationshipStyles` object in `src/data.js`:

```js
family: { color: '#7433cf' },
friend: { color: '#0969df' },
extended: { color: '#7433cf', dashed: true }
```

## Responsive Design

The desktop layout follows the original fixed composition. Below 800px, Tailwind responsive utilities stack the cards vertically and the complete React Flow canvas scales inside a proportional frame. On smaller phones, typography, spacing, icons, and the relationship legend adapt without introducing horizontal scrolling.

## Deployment

Create the optimized build:

```bash
npm run build
```

Deploy the contents of `dist/` to a static host such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Notes

- The included profile photos are dummy remote avatars used for demonstration.
- For production, replace remote avatar URLs with approved local assets or an authenticated image service.
- Relationship paths are deliberately routed to reproduce the supplied family-tree composition.
