import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CompetitionsPage from './pages/CompetitionsPage';
import UploadPage from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
import RewardsPage from './pages/RewardsPage';
import ArtistProfilePage from './pages/ArtistProfilePage';
import { Toaster } from './components/ui/sonner';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const competitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/competitions',
  component: CompetitionsPage,
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/upload',
  component: UploadPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage,
});

const rewardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rewards',
  component: RewardsPage,
});

const artistProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/artist/$artistId',
  component: ArtistProfilePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  competitionsRoute,
  uploadRoute,
  profileRoute,
  rewardsRoute,
  artistProfileRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
