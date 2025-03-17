import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProtectedRoute = (WrappedComponent) => {
  return function AuthGuard(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      axios
        .get("/api/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setUser(res.data.user);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }, []);

    if (loading) return <p>Loading...</p>;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default ProtectedRoute;
