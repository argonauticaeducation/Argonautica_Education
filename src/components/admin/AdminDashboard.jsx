import { useEffect, useMemo, useState } from "react";

import {
  LogOut,
  RefreshCw,
  Search,
  Users,
  UserCheck,
  CheckCircle2,
  Clock,
  Download,
  FileSpreadsheet,
  ChevronDown,
  StickyNote,
  Save,
  Trash2,
  X,
  AlertTriangle,
} from "lucide-react";

import * as XLSX from "xlsx";

import { supabase } from "../../lib/supabase";


// ============================================================
// STATUS OPTIONS
// ============================================================

const STATUS_OPTIONS = [
  "New",
  "Contacted",
  "Completed",
];


// ============================================================
// ADMIN DASHBOARD
// ============================================================

const AdminDashboard = ({ user, onLogout }) => {
  const [enquiries, setEnquiries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [updatingId, setUpdatingId] = useState(null);

  const [exportOpen, setExportOpen] = useState(false);

  const [editingNoteId, setEditingNoteId] = useState(null);
  const [noteValue, setNoteValue] = useState("");
  const [savingNoteId, setSavingNoteId] = useState(null);

  // ==========================================================
  // DELETE STATE
  // ==========================================================

  const [deletingId, setDeletingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);


  // ==========================================================
  // FETCH ENQUIRIES
  // ==========================================================

  const fetchEnquiries = async (showRefresh = false) => {
    if (showRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(
        "Error fetching enquiries:",
        error
      );

      alert(
        error.message ||
          "Unable to load enquiries."
      );
    } else {
      setEnquiries(data || []);
    }

    setLoading(false);
    setRefreshing(false);
  };


  // ==========================================================
  // INITIAL LOAD
  // ==========================================================

  useEffect(() => {
    fetchEnquiries();
  }, []);


  // ==========================================================
  // UPDATE STATUS
  // ==========================================================

  const updateStatus = async (id, status) => {
    setUpdatingId(id);

    const { error } = await supabase
      .from("enquiries")
      .update({
        status,
      })
      .eq("id", id);

    if (error) {
      console.error(
        "Status update error:",
        error
      );

      alert(
        error.message ||
          "Unable to update enquiry status."
      );

      setUpdatingId(null);
      return;
    }

    setEnquiries((current) =>
      current.map((enquiry) =>
        enquiry.id === id
          ? {
              ...enquiry,
              status,
            }
          : enquiry
      )
    );

    setUpdatingId(null);
  };


  // ==========================================================
  // START NOTE EDITING
  // ==========================================================

  const startEditingNote = (enquiry) => {
    setEditingNoteId(enquiry.id);
    setNoteValue(enquiry.notes || "");
  };


  // ==========================================================
  // CANCEL NOTE EDITING
  // ==========================================================

  const cancelEditingNote = () => {
    setEditingNoteId(null);
    setNoteValue("");
  };


  // ==========================================================
  // SAVE NOTE
  // ==========================================================

  const saveNote = async (id) => {
    setSavingNoteId(id);

    const cleanNote = noteValue.trim();

    const { error } = await supabase
      .from("enquiries")
      .update({
        notes: cleanNote || null,
      })
      .eq("id", id);

    if (error) {
      console.error(
        "Note update error:",
        error
      );

      alert(
        error.message ||
          "Unable to save note."
      );

      setSavingNoteId(null);
      return;
    }

    setEnquiries((current) =>
      current.map((enquiry) =>
        enquiry.id === id
          ? {
              ...enquiry,
              notes: cleanNote,
            }
          : enquiry
      )
    );

    setSavingNoteId(null);
    setEditingNoteId(null);
    setNoteValue("");
  };


  // ==========================================================
  // REQUEST DELETE
  //
  // Opens custom confirmation modal.
  // NO browser confirm popup.
  // ==========================================================

  const requestDeleteEnquiry = (id) => {
    const enquiry = enquiries.find(
      (item) => item.id === id
    );

    if (!enquiry) {
      return;
    }

    setDeleteTarget(enquiry);
  };


  // ==========================================================
  // CANCEL DELETE
  // ==========================================================

  const cancelDelete = () => {
    if (deletingId) {
      return;
    }

    setDeleteTarget(null);
  };


  // ==========================================================
  // CONFIRM DELETE
  // ==========================================================

  const confirmDelete = async () => {
    if (!deleteTarget) {
      return;
    }

    const id = deleteTarget.id;

    setDeletingId(id);

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(
        "Delete enquiry error:",
        error
      );

      setDeletingId(null);

      return;
    }

    // Remove deleted enquiry immediately
    // from local state.

    setEnquiries((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );

    // Close note editor if the deleted
    // enquiry was being edited.

    if (editingNoteId === id) {
      setEditingNoteId(null);
      setNoteValue("");
    }

    setDeletingId(null);
    setDeleteTarget(null);
  };


  // ==========================================================
  // LOGOUT
  // ==========================================================

  const handleLogout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    onLogout();
    window.location.href = "/";
  }
};


  // ==========================================================
  // FILTER ENQUIRIES
  // ==========================================================

  const filteredEnquiries = useMemo(() => {
    const searchValue = search
      .trim()
      .toLowerCase();

    return enquiries.filter((enquiry) => {
      const matchesSearch =
        !searchValue ||
        String(enquiry.name || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(enquiry.phone || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(enquiry.year_level || "")
          .toLowerCase()
          .includes(searchValue) ||
        String(enquiry.notes || "")
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        enquiry.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [
    enquiries,
    search,
    statusFilter,
  ]);


  // ==========================================================
  // STATISTICS
  // ==========================================================

  const total = enquiries.length;

  const newCount = enquiries.filter(
    (item) => item.status === "New"
  ).length;

  const contactedCount = enquiries.filter(
    (item) => item.status === "Contacted"
  ).length;

  const completedCount = enquiries.filter(
    (item) => item.status === "Completed"
  ).length;


  // ==========================================================
  // EXPORT DATA
  // ==========================================================

  const getExportData = () => {
    return filteredEnquiries.map(
      (enquiry) => ({
        ID: enquiry.id || "",
        Name: enquiry.name || "",
        Phone: enquiry.phone || "",
        Year: enquiry.year_level || "",
        Status: enquiry.status || "",
        Notes: enquiry.notes || "",
      })
    );
  };


  // ==========================================================
  // EXPORT CSV
  // ==========================================================

  const exportToCSV = () => {
    const rows = getExportData();

    if (rows.length === 0) {
      alert(
        "There are no enquiries to export."
      );

      return;
    }

    const headers = Object.keys(rows[0]);

    const csvRows = rows.map((row) => {
      return headers
        .map((header) => {
          const value =
            row[header] ?? "";

          return `"${String(value).replace(
            /"/g,
            '""'
          )}"`;
        })
        .join(",");
    });

    const csvContent = [
      headers.join(","),
      ...csvRows,
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type:
          "text/csv;charset=utf-8;",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `argonautica-enquiries-${new Date()
        .toISOString()
        .slice(0, 10)}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setExportOpen(false);
  };


  // ==========================================================
  // EXPORT EXCEL
  // ==========================================================

  const exportToExcel = () => {
    const rows = getExportData();

    if (rows.length === 0) {
      alert(
        "There are no enquiries to export."
      );

      return;
    }

    const worksheet =
      XLSX.utils.json_to_sheet(rows);

    worksheet["!cols"] = [
      { wch: 12 },
      { wch: 30 },
      { wch: 20 },
      { wch: 15 },
      { wch: 16 },
      { wch: 45 },
    ];

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Enquiries"
    );

    XLSX.writeFile(
      workbook,
      `argonautica-enquiries-${new Date()
        .toISOString()
        .slice(0, 10)}.xlsx`
    );

    setExportOpen(false);
  };


  // ==========================================================
  // RETURN
  // ==========================================================

  return (
    <div className="min-h-screen bg-[#f5f3ed]">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          border-b
          border-[#e2ddcf]
          bg-white
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            items-center
            justify-between
            px-[20px]
            py-[18px]
            lg:px-[40px]
          "
        >

          {/* BRAND */}

          <div>

            <h1
              className="
                text-[25px]
                font-bold
                tracking-[-0.4px]
                text-[#182557]
              "
            >
              Argonautica
            </h1>

            <p
              className="
                mt-[2px]
                text-[13px]
                font-medium
                text-[#777c90]
              "
            >
              Enquiry Management
            </p>

          </div>


          {/* USER / LOGOUT */}

          <div
            className="
              flex
              items-center
              gap-[14px]
            "
          >

            <span
              className="
                hidden
                text-[13px]
                font-semibold
                text-[#555b72]
                sm:block
              "
            >
              {user?.email}
            </span>

            <button
              type="button"
              onClick={handleLogout}
              className="
                flex
                h-[40px]
                items-center
                gap-[7px]
                rounded-[7px]
                border
                border-[#ddd7c9]
                bg-white
                px-[13px]
                text-[13px]
                font-bold
                text-[#182557]
                transition
                hover:bg-[#f7f4ec]
              "
            >

              <LogOut size={15} />

              Logout

            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          mx-auto
          max-w-[1400px]
          px-[20px]
          py-[30px]
          lg:px-[40px]
          lg:py-[40px]
        "
      >


        {/* ===================================================
            TITLE
        =================================================== */}

        <div className="mb-[28px]">

          <h2
            className="
              text-[30px]
              font-bold
              tracking-[-0.5px]
              text-[#182557]
            "
          >
            Enquiries
          </h2>

          <p
            className="
              mt-[5px]
              text-[14px]
              text-[#777c90]
            "
          >
            Manage enquiries submitted through
            the website.
          </p>

        </div>


        {/* ===================================================
            STAT CARDS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[15px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* TOTAL */}

          <div
            className="
              rounded-[12px]
              border
              border-[#e2ddcf]
              bg-white
              p-[20px]
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[13px]
                    font-semibold
                    text-[#777c90]
                  "
                >
                  Total enquiries
                </p>

                <p
                  className="
                    mt-[7px]
                    text-[29px]
                    font-bold
                    text-[#182557]
                  "
                >
                  {total}
                </p>

              </div>

              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#182557]
                  text-white
                "
              >
                <Users size={19} />
              </div>

            </div>

          </div>


          {/* NEW */}

          <div
            className="
              rounded-[12px]
              border
              border-[#e2ddcf]
              bg-white
              p-[20px]
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[13px]
                    font-semibold
                    text-[#777c90]
                  "
                >
                  New
                </p>

                <p
                  className="
                    mt-[7px]
                    text-[29px]
                    font-bold
                    text-[#182557]
                  "
                >
                  {newCount}
                </p>

              </div>

              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#dfa92f]
                  text-[#17234f]
                "
              >
                <Clock size={19} />
              </div>

            </div>

          </div>


          {/* CONTACTED */}

          <div
            className="
              rounded-[12px]
              border
              border-[#e2ddcf]
              bg-white
              p-[20px]
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[13px]
                    font-semibold
                    text-[#777c90]
                  "
                >
                  Contacted
                </p>

                <p
                  className="
                    mt-[7px]
                    text-[29px]
                    font-bold
                    text-[#182557]
                  "
                >
                  {contactedCount}
                </p>

              </div>

              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#e8edf7]
                  text-[#182557]
                "
              >
                <UserCheck size={19} />
              </div>

            </div>

          </div>


          {/* COMPLETED */}

          <div
            className="
              rounded-[12px]
              border
              border-[#e2ddcf]
              bg-white
              p-[20px]
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[13px]
                    font-semibold
                    text-[#777c90]
                  "
                >
                  Completed
                </p>

                <p
                  className="
                    mt-[7px]
                    text-[29px]
                    font-bold
                    text-[#182557]
                  "
                >
                  {completedCount}
                </p>

              </div>

              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#e7f3eb]
                  text-[#28663d]
                "
              >
                <CheckCircle2 size={19} />
              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            FILTER / EXPORT BAR
        =================================================== */}

        <div
          className="
            mt-[30px]
            flex
            flex-col
            gap-[12px]
            rounded-[12px]
            border
            border-[#e2ddcf]
            bg-white
            p-[15px]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* SEARCH */}

          <div
            className="
              relative
              w-full
              md:max-w-[420px]
            "
          >

            <Search
              size={17}
              className="
                absolute
                left-[13px]
                top-1/2
                -translate-y-1/2
                text-[#8b8fa0]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name, phone, year or note..."
              className="
                h-[43px]
                w-full
                rounded-[7px]
                border
                border-[#ddd7c9]
                bg-[#fffdf8]
                pl-[39px]
                pr-[12px]
                text-[14px]
                text-[#182557]
                outline-none
                transition
                focus:border-[#dfa92f]
                focus:ring-2
                focus:ring-[#dfa92f]/10
              "
            />

          </div>


          {/* RIGHT CONTROLS */}

          <div
            className="
              flex
              flex-wrap
              gap-[10px]
            "
          >

            {/* STATUS */}

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="
                h-[43px]
                rounded-[7px]
                border
                border-[#ddd7c9]
                bg-white
                px-[12px]
                text-[14px]
                font-semibold
                text-[#182557]
                outline-none
                focus:border-[#dfa92f]
              "
            >

              <option value="All">
                All statuses
              </option>

              {STATUS_OPTIONS.map(
                (status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {status}
                  </option>
                )
              )}

            </select>


            {/* EXPORT */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setExportOpen(
                    (current) => !current
                  )
                }
                disabled={
                  filteredEnquiries.length === 0
                }
                className="
                  flex
                  h-[43px]
                  items-center
                  gap-[7px]
                  rounded-[7px]
                  bg-[#182557]
                  px-[14px]
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#111c49]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >

                <Download size={16} />

                Export

                <ChevronDown
                  size={15}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      exportOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {exportOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-[50px]
                    z-50
                    w-[190px]
                    overflow-hidden
                    rounded-[9px]
                    border
                    border-[#e2ddcf]
                    bg-white
                    p-[5px]
                    shadow-[0_12px_30px_rgba(24,37,87,0.15)]
                  "
                >

                  <button
                    type="button"
                    onClick={exportToCSV}
                    className="
                      flex
                      w-full
                      items-center
                      gap-[10px]
                      rounded-[6px]
                      px-[11px]
                      py-[10px]
                      text-left
                      text-[13px]
                      font-semibold
                      text-[#182557]
                      transition
                      hover:bg-[#f7f4ec]
                    "
                  >

                    <Download size={16} />

                    <span>
                      Export CSV
                    </span>

                  </button>


                  <button
                    type="button"
                    onClick={exportToExcel}
                    className="
                      flex
                      w-full
                      items-center
                      gap-[10px]
                      rounded-[6px]
                      px-[11px]
                      py-[10px]
                      text-left
                      text-[13px]
                      font-semibold
                      text-[#182557]
                      transition
                      hover:bg-[#f7f4ec]
                    "
                  >

                    <FileSpreadsheet
                      size={16}
                      className="text-[#28663d]"
                    />

                    <span>
                      Export Excel
                    </span>

                  </button>

                </div>
              )}

            </div>


            {/* REFRESH */}

            <button
              type="button"
              onClick={() =>
                fetchEnquiries(true)
              }
              disabled={refreshing}
              className="
                flex
                h-[43px]
                w-[43px]
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#ddd7c9]
                bg-white
                text-[#182557]
                transition
                hover:bg-[#f7f4ec]
                disabled:opacity-50
              "
              aria-label="Refresh enquiries"
            >

              <RefreshCw
                size={17}
                className={
                  refreshing
                    ? "animate-spin"
                    : ""
                }
              />

            </button>

          </div>

        </div>


        {/* ===================================================
            TABLE
        =================================================== */}

        <div
          className="
            mt-[15px]
            overflow-hidden
            rounded-[12px]
            border
            border-[#e2ddcf]
            bg-white
          "
        >

          {loading ? (

            <div
              className="
                flex
                min-h-[300px]
                items-center
                justify-center
                text-[14px]
                font-semibold
                text-[#777c90]
              "
            >
              Loading enquiries...
            </div>

          ) : filteredEnquiries.length === 0 ? (

            <div
              className="
                flex
                min-h-[300px]
                items-center
                justify-center
                px-[20px]
                text-center
                text-[14px]
                font-semibold
                text-[#777c90]
              "
            >
              No enquiries found.
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table
                className="
                  w-full
                  min-w-[1200px]
                "
              >

                <thead>

                  <tr
                    className="
                      border-b
                      border-[#e2ddcf]
                      bg-[#faf8f2]
                    "
                  >

                    <th className="px-[18px] py-[14px] text-left text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Name
                    </th>

                    <th className="px-[18px] py-[14px] text-left text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Phone
                    </th>

                    <th className="px-[18px] py-[14px] text-left text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Year
                    </th>

                    <th className="px-[18px] py-[14px] text-left text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Status
                    </th>

                    <th className="px-[18px] py-[14px] text-left text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Notes
                    </th>

                    <th className="px-[18px] py-[14px] text-center text-[12px] font-bold uppercase tracking-[0.5px] text-[#777c90]">
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {filteredEnquiries.map(
                    (enquiry) => (

                      <tr
                        key={enquiry.id}
                        className="
                          border-b
                          border-[#eeeae0]
                          last:border-b-0
                          hover:bg-[#fcfaf5]
                        "
                      >

                        {/* NAME */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                          "
                        >

                          <p
                            className="
                              text-[14px]
                              font-bold
                              text-[#182557]
                            "
                          >
                            {enquiry.name}
                          </p>

                        </td>


                        {/* PHONE */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                            text-[14px]
                            font-medium
                            text-[#555b72]
                          "
                        >
                          {enquiry.phone}
                        </td>


                        {/* YEAR */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                            text-[14px]
                            font-semibold
                            text-[#555b72]
                          "
                        >
                          {enquiry.year_level}
                        </td>


                        {/* STATUS */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                          "
                        >

                          <select
                            value={
                              enquiry.status ||
                              "New"
                            }
                            disabled={
                              updatingId ===
                              enquiry.id
                            }
                            onChange={(e) =>
                              updateStatus(
                                enquiry.id,
                                e.target.value
                              )
                            }
                            className="
                              h-[36px]
                              rounded-[7px]
                              border
                              border-[#ddd7c9]
                              bg-white
                              px-[10px]
                              text-[13px]
                              font-bold
                              text-[#182557]
                              outline-none
                              focus:border-[#dfa92f]
                              disabled:opacity-50
                            "
                          >

                            {STATUS_OPTIONS.map(
                              (status) => (
                                <option
                                  key={status}
                                  value={status}
                                >
                                  {status}
                                </option>
                              )
                            )}

                          </select>

                        </td>


                        {/* NOTES */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                          "
                        >

                          {editingNoteId ===
                          enquiry.id ? (

                            <div
                              className="
                                flex
                                min-w-[280px]
                                flex-col
                                gap-[8px]
                              "
                            >

                              <textarea
                                value={noteValue}
                                onChange={(e) =>
                                  setNoteValue(
                                    e.target.value
                                  )
                                }
                                autoFocus
                                rows={3}
                                placeholder="Write a note..."
                                className="
                                  w-full
                                  resize-none
                                  rounded-[7px]
                                  border
                                  border-[#ddd7c9]
                                  bg-[#fffdf8]
                                  px-[10px]
                                  py-[8px]
                                  text-[13px]
                                  leading-[1.4]
                                  text-[#182557]
                                  outline-none
                                  focus:border-[#dfa92f]
                                "
                              />

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-[7px]
                                "
                              >

                                <button
                                  type="button"
                                  onClick={() =>
                                    saveNote(
                                      enquiry.id
                                    )
                                  }
                                  disabled={
                                    savingNoteId ===
                                    enquiry.id
                                  }
                                  className="
                                    flex
                                    h-[32px]
                                    items-center
                                    gap-[5px]
                                    rounded-[6px]
                                    bg-[#182557]
                                    px-[10px]
                                    text-[12px]
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-[#111c49]
                                    disabled:opacity-50
                                  "
                                >

                                  <Save size={13} />

                                  {savingNoteId ===
                                  enquiry.id
                                    ? "Saving..."
                                    : "Save"}

                                </button>


                                <button
                                  type="button"
                                  onClick={
                                    cancelEditingNote
                                  }
                                  disabled={
                                    savingNoteId ===
                                    enquiry.id
                                  }
                                  className="
                                    h-[32px]
                                    rounded-[6px]
                                    border
                                    border-[#ddd7c9]
                                    bg-white
                                    px-[10px]
                                    text-[12px]
                                    font-bold
                                    text-[#555b72]
                                    transition
                                    hover:bg-[#f7f4ec]
                                    disabled:opacity-50
                                  "
                                >
                                  Cancel
                                </button>

                              </div>

                            </div>

                          ) : (

                            <button
                              type="button"
                              onClick={() =>
                                startEditingNote(
                                  enquiry
                                )
                              }
                              className="
                                group
                                flex
                                min-w-[220px]
                                max-w-[330px]
                                items-start
                                gap-[8px]
                                rounded-[7px]
                                border
                                border-transparent
                                px-[8px]
                                py-[7px]
                                text-left
                                transition
                                hover:border-[#e2ddcf]
                                hover:bg-[#faf8f2]
                              "
                            >

                              <StickyNote
                                size={15}
                                className="
                                  mt-[2px]
                                  shrink-0
                                  text-[#b18a32]
                                "
                              />

                              {enquiry.notes ? (

                                <span
                                  className="
                                    line-clamp-3
                                    text-[13px]
                                    font-medium
                                    leading-[1.4]
                                    text-[#555b72]
                                  "
                                >
                                  {enquiry.notes}
                                </span>

                              ) : (

                                <span
                                  className="
                                    text-[13px]
                                    font-semibold
                                    text-[#a0a3af]
                                  "
                                >
                                  Add note...
                                </span>

                              )}

                            </button>

                          )}

                        </td>


                        {/* =================================================
                            DELETE ACTION
                        ================================================= */}

                        <td
                          className="
                            px-[18px]
                            py-[17px]
                          "
                        >

                          <div
                            className="
                              flex
                              justify-center
                            "
                          >

                            <button
                              type="button"
                              onClick={() =>
                                requestDeleteEnquiry(
                                  enquiry.id
                                )
                              }
                              disabled={
                                deletingId ===
                                enquiry.id
                              }
                              title="Delete enquiry"
                              aria-label={`Delete enquiry from ${enquiry.name}`}
                              className="
                                group
                                flex
                                h-[36px]
                                w-[36px]
                                items-center
                                justify-center
                                rounded-[7px]
                                border
                                border-[#efcaca]
                                bg-[#fff7f7]
                                text-[#c43d3d]
                                transition-all
                                duration-150
                                hover:-translate-y-[1px]
                                hover:border-[#e3a7a7]
                                hover:bg-[#fdeaea]
                                hover:text-[#a92d2d]
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                              "
                            >

                              {deletingId ===
                              enquiry.id ? (

                                <RefreshCw
                                  size={16}
                                  className="animate-spin"
                                />

                              ) : (

                                <Trash2
                                  size={16}
                                  className="
                                    transition-transform
                                    duration-150
                                    group-hover:scale-105
                                  "
                                />

                              )}

                            </button>

                          </div>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>


        {/* ===================================================
            FOOTER INFORMATION
        =================================================== */}

        {!loading &&
          filteredEnquiries.length > 0 && (

            <div
              className="
                mt-[12px]
                flex
                flex-col
                gap-[5px]
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <p
                className="
                  text-[11px]
                  font-medium
                  text-[#85899a]
                "
              >
                Click any note to add or edit
                follow-up information.
              </p>

              <p
                className="
                  text-right
                  text-[12px]
                  font-medium
                  text-[#85899a]
                "
              >
                Showing{" "}
                {filteredEnquiries.length}{" "}
                of{" "}
                {enquiries.length}{" "}
                enquiries
              </p>

            </div>

          )}

      </main>


      {/* =====================================================
          CUSTOM DELETE CONFIRMATION MODAL
          
          This replaces window.confirm().
          No browser/server popup.
      ===================================================== */}

      {deleteTarget && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#182557]/45
            px-[20px]
            backdrop-blur-[3px]
          "
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              cancelDelete();
            }
          }}
        >

          {/* MODAL */}

          <div
            className="
              w-full
              max-w-[430px]
              overflow-hidden
              rounded-[16px]
              border
              border-[#e2ddcf]
              bg-white
              shadow-[0_25px_70px_rgba(24,37,87,0.22)]
              animate-[deleteModalIn_180ms_ease-out]
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
          >

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div
              className="
                flex
                items-start
                justify-between
                border-b
                border-[#eeeae0]
                px-[22px]
                py-[20px]
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-[12px]
                "
              >

                {/* WARNING ICON */}

                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[10px]
                    bg-[#fff0f0]
                    text-[#c43d3d]
                  "
                >
                  <Trash2 size={19} />
                </div>


                {/* TITLE */}

                <div>

                  <h3
                    id="delete-dialog-title"
                    className="
                      text-[17px]
                      font-bold
                      tracking-[-0.2px]
                      text-[#182557]
                    "
                  >
                    Delete enquiry?
                  </h3>

                  <p
                    className="
                      mt-[2px]
                      text-[12px]
                      font-medium
                      text-[#85899a]
                    "
                  >
                    This action cannot be undone.
                  </p>

                </div>

              </div>


              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={cancelDelete}
                disabled={Boolean(deletingId)}
                aria-label="Close delete confirmation"
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-[6px]
                  text-[#85899a]
                  transition
                  hover:bg-[#f7f4ec]
                  hover:text-[#182557]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <X size={17} />
              </button>

            </div>


            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div
              className="
                px-[22px]
                py-[22px]
              "
            >

              <p
                className="
                  text-[14px]
                  leading-[1.55]
                  text-[#555b72]
                "
              >
                Are you sure you want to delete
                the enquiry from{" "}

                <span
                  className="
                    font-bold
                    text-[#182557]
                  "
                >
                  "{deleteTarget.name}"
                </span>
                ?
              </p>


              {/* WARNING MESSAGE */}

              <div
                className="
                  mt-[15px]
                  flex
                  items-start
                  gap-[9px]
                  rounded-[9px]
                  border
                  border-[#f0d4d4]
                  bg-[#fff8f8]
                  px-[13px]
                  py-[11px]
                "
              >

                <AlertTriangle
                  size={15}
                  className="
                    mt-[1px]
                    shrink-0
                    text-[#c43d3d]
                  "
                />

                <p
                  className="
                    text-[12px]
                    font-medium
                    leading-[1.45]
                    text-[#9d4a4a]
                  "
                >
                  The enquiry, its status and
                  notes will be permanently
                  removed.
                </p>

              </div>

            </div>


            {/* =================================================
                MODAL ACTIONS
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-end
                gap-[9px]
                border-t
                border-[#eeeae0]
                bg-[#fcfaf5]
                px-[22px]
                py-[15px]
              "
            >

              {/* CANCEL */}

              <button
                type="button"
                onClick={cancelDelete}
                disabled={Boolean(deletingId)}
                className="
                  h-[38px]
                  rounded-[7px]
                  border
                  border-[#ddd7c9]
                  bg-white
                  px-[15px]
                  text-[13px]
                  font-bold
                  text-[#555b72]
                  transition
                  hover:bg-[#f7f4ec]
                  hover:text-[#182557]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                Cancel
              </button>


              {/* DELETE */}

              <button
                type="button"
                onClick={confirmDelete}
                disabled={Boolean(deletingId)}
                className="
                  flex
                  h-[38px]
                  items-center
                  gap-[7px]
                  rounded-[7px]
                  bg-[#c43d3d]
                  px-[15px]
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-150
                  hover:bg-[#a92d2d]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {deletingId ? (

                  <>
                    <RefreshCw
                      size={14}
                      className="animate-spin"
                    />

                    Deleting...
                  </>

                ) : (

                  <>
                    <Trash2 size={14} />

                    Delete enquiry
                  </>

                )}

              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          DELETE MODAL ANIMATION
      ===================================================== */}

      <style>
        {`
          @keyframes deleteModalIn {
            from {
              opacity: 0;
              transform:
                translateY(8px)
                scale(0.98);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }
        `}
      </style>

    </div>
  );
};


export default AdminDashboard;