import MainLayout from "./components/layouts/MainLayout";
import Dropdown, { DropdownItem } from "./components/Dropdown";

export default function Home() {
  return (
    <MainLayout title="Introduction X" description="Welcome to the Next.js documentation! X">

      <Dropdown className="mb-4">
        <DropdownItem id="1" title="Dropdown example no 1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus veniam corporis ut hic optio voluptatum ipsam delectus doloremque ducimus?</p>
        </DropdownItem>
        <DropdownItem id="2" title="Dropdown example no 2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam quia ipsum molestiae deserunt, quasi, sunt libero totam corrupti error animi deleniti nihil quidem? Quasi maxime cupiditate nisi sint nostrum.</p>
        </DropdownItem>
        <DropdownItem id="3" title="Dropdown example no 3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo cum at distinctio sapiente adipisci ullam amet placeat veritatis, voluptatem accusantium harum ad, excepturi illum suscipit ipsum aliquam eius error eaque natus. Quia animi consectetur, voluptate explicabo voluptatibus in. Rerum.</p>
        </DropdownItem>
      </Dropdown>

      <h2 className="mb-4 text-xl font-medium">What is Next.js?</h2>
      <p className="mb-4 text-zinc-400">Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</p>
      <p className="mb-4 text-zinc-400">Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.</p>
      <p className="mb-4 text-zinc-400">Whether you&apos;re an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>

      <h2 className="mb-4 text-xl font-medium">Main Features</h2>
      <p className="mb-4 text-zinc-400">Some of the main Next.js features include:</p>
      <table className="mb-8 w-full">
        <thead>
          <tr className="bg-zinc-950">
            <th className="border border-zinc-800 px-4 py-2 font-normal">Feature</th>
            <th className="border border-zinc-800 px-4 py-2 font-normal">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">Routing</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.</td>
          </tr>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">Rendering</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.</td>
          </tr>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">Data Fetching</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.</td>
          </tr>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">Styling</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">	Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS</td>
          </tr>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">Optimizations</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">Image, Fonts, and Script Optimizations to improve your application&apos;s Core Web Vitals and User Experience.</td>
          </tr>
          <tr>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-white">TypeScript</td>
            <td className="border border-zinc-800 text-sm px-4 py-2 text-zinc-400">	Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.</td>
          </tr>
        </tbody>
      </table>
      <h2 className="mb-4 text-xl font-medium">How to Use These Docs</h2>
      <p className="mb-4 text-zinc-400">On the left side of the screen, you&apos;ll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.</p>
      <p className="mb-4 text-zinc-400">On the right side of the screen, you&apos;ll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).</p>
    </MainLayout>
  );
}
