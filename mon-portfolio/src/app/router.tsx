import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import EducationPage from "@/pages/Education";
import CertificationsPage from "@/pages/Certifications";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <EducationPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
