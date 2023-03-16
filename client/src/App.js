import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { Login, Register, Home, Profile, ProfileEdit, About, Landing } from "./pages/index";
import { Navbar, LeftBar, RightBar } from "./components/index";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function useRoutes() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  const Layout = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <div style={{ display: "flex" }}>
              {/*<LeftBar />*/}
              <div style={{ flex: 6 }}>
                {children}
              </div>
              {/*<RightBar />*/}
            </div>
          </div>
        </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/landing" />;
    }

    return children;
  };

  return [
    {
      path: "/",
      element: (
          <ProtectedRoute>
            <Layout>
              <Outlet />
            </Layout>
          </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          element: <ProfileEdit />,
        },
        {
          path: "/about",
          element: <About />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/landing",
      element: <Landing />,
    }
  ];
}

function App() {
  const routes = useRoutes();
  const router = createBrowserRouter(routes);

  return (
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
  );
}

export default App;