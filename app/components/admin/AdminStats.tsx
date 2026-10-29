interface Props {
  contacts: number;
  visitors: number;
}

const AdminStats = ({ contacts, visitors }: Props) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* CARD 1: CONTACTS */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
        {/* Ambient background glow mapped precisely to your Premium Chart-1 color variable */}
        <div className="absolute -right-4 -top-4 h-36 w-36 rounded-full bg-(--chart-1)/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />


        <div className="flex items-center justify-between">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Total Contacts
          </p>
          
          {/* Subtle icon container utilizing Chart-1 colors */}
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-(--chart-1)/10 text-chart-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        <h2 className="mt-6 font-sans text-5xl font-black tracking-tight text-foreground sm:text-6xl">
          {contacts.toLocaleString()}
        </h2>
      </div>

      {/* CARD 2: VISITORS */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
        {/* Ambient background glow mapped precisely to your Premium Chart-2 color variable */}
        <div className="absolute -right-4 -top-4 h-36 w-36 rounded-full bg-(--chart-2)/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

        <div className="flex items-center justify-between">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Total Visitors
          </p>

          {/* Subtle icon container utilizing Chart-2 colors */}
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-(--chart-2)/10 text-chart-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>

        <h2 className="mt-6 font-sans text-5xl font-black tracking-tight text-foreground sm:text-6xl">
          {visitors.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default AdminStats;