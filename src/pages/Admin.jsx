import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";


const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const checkSession = async () => {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user || null);
      setLoading(false);
    };


    checkSession();


    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user || null);

      }
    );


    return () => {
      subscription.unsubscribe();
    };

  }, []);


  const handleLogout = () => {
    setUser(null);
  };


  if (loading) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f5f3ed]
          text-[15px]
          font-semibold
          text-[#182557]
        "
      >
        Loading...
      </div>
    );

  }


  if (!user) {

    return (
      <AdminLogin
        onLogin={(loggedInUser) => {
          setUser(loggedInUser);
        }}
      />
    );

  }


  return (
    <AdminDashboard
      user={user}
      onLogout={handleLogout}
    />
  );
};


export default Admin;