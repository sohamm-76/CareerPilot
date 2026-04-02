import { Refine } from "@refinedev/core";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerBindings, {
  NavigateToResource,
  CatchAllNavigate,
} from "@refinedev/react-router";
import { dataProvider } from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";

// Pages
import LoginPage from "./pages/login";
import StudentDashboard from "./pages/student/dashboard";
import MarksPage from "./pages/student/marks";
import SkillsPage from "./pages/student/skills";
import RecommendationsPage from "./pages/student/recommendations";
import GapAnalysisPage from "./pages/student/gap-analysis";
import ProfilePage from "./pages/student/profile";
import FacultyDashboard from "./pages/faculty/dashboard";
import UploadMarksPage from "./pages/faculty/upload";
import FacultyAnalytics from "./pages/faculty/analytics";
import AdminDashboard from "./pages/admin/dashboard";
import DepartmentsPage from "./pages/admin/departments";
import CareerTracksPage from "./pages/admin/career-tracks";

// Layout
import { CustomLayout } from "./components/layout/CustomLayout";

function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider}
        authProvider={authProvider}
        routerProvider={routerBindings}
        resources={[
          {
            name: "marks",
            list: "/marks",
            meta: { label: "Marks" },
          },
          {
            name: "activities",
            list: "/skills",
            meta: { label: "Skills" },
          },
          {
            name: "recommendations",
            list: "/recommendations",
            meta: { label: "Recommendations" },
          },
          {
            name: "departments",
            list: "/admin/departments",
            meta: { label: "Departments" },
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes with layout */}
          <Route
            element={
              <CustomLayout>
                <Outlet />
              </CustomLayout>
            }
          >
            {/* Student */}
            <Route index element={<NavigateToResource resource="marks" />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/marks" element={<MarksPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/gap-analysis" element={<GapAnalysisPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Faculty */}
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/faculty/upload" element={<UploadMarksPage />} />
            <Route path="/faculty/analytics" element={<FacultyAnalytics />} />

            {/* Admin */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/departments" element={<DepartmentsPage />} />
            <Route
              path="/admin/career-tracks"
              element={<CareerTracksPage />}
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<CatchAllNavigate to="/login" />} />
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
