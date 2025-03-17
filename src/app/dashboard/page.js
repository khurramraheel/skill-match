
import ProtectedRoute from "@/components/protectroute/protectroute";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user?.email}!</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProtectedRoute(Dashboard);
