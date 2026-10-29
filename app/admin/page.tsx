"use client";

import { useEffect, useState, useCallback } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminStats from "../components/admin/AdminStats";
import VisitorsList from "../components/admin/VisitorsList";
import ContactsList from "../components/admin/ContactsList";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [visitors, setVisitors] = useState([]);

  const fetchContacts = useCallback(async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchVisitors = useCallback(async () => {
    try {
      const res = await fetch("/api/visitor");
      const data = await res.json();
      setVisitors(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
    fetchVisitors();
  }, [fetchContacts, fetchVisitors]);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <AdminHeader />

        <AdminStats
          contacts={contacts.length}
          visitors={visitors.length}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ContactsList contacts={contacts} />
          <VisitorsList visitors={visitors} />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;