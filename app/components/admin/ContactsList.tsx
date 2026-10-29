interface ContactItem {
  id: string | number;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface Props {
  contacts: ContactItem[];
}

const ContactsList = ({ contacts }: Props) => {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md backdrop-blur-md sm:p-8">
      {/* HEADER META BLOCK */}
      <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <h2 className="font-sans text-xl font-black tracking-tight text-foreground sm:text-2xl">
            Contact Leads
          </h2>
          <p className="mt-1 font-sans text-xs font-medium text-muted-foreground">
            Inbound pipeline overview
          </p>
        </div>
        
        {/* Dynamic counter pill */}
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-bold text-primary">
          {contacts.length} {contacts.length === 1 ? "Lead" : "Leads"}
        </span>
      </div>

      {/* RENDER LIST CONTAINER */}
      {contacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="font-sans text-sm font-medium text-muted-foreground">No leads received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-border/80 bg-background/50 p-5 transition-all duration-200 hover:border-primary/30 hover:bg-background/80"
            >
              {/* UPPER SECTION: Identity and Badge */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-sans text-base font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    {item.email}
                  </p>
                </div>

                <span className="self-start rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-primary">
                  {item.service || "General Inquiry"}
                </span>
              </div>

              {/* MIDDLE SECTION: Structural Details Data Grid */}
              <div className="mt-5 grid gap-4 rounded-xl bg-card/60 p-4 border border-border/40 sm:grid-cols-2">
                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
                    Company Focus
                  </span>
                  <span className="mt-1 font-sans text-sm font-semibold text-foreground block">
                    {item.company || "Not Provided"}
                  </span>
                </div>

                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
                    System Interest
                  </span>
                  <span className="mt-1 font-sans text-sm font-semibold text-foreground block">
                    {item.service ? `${item.service} Solutions` : "Standard Tier"}
                  </span>
                </div>
              </div>

              {/* LOWER SECTION: Text Message Display */}
              <div className="mt-4 px-1">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
                  Message Details
                </span>
                <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/90 bg-muted/30 rounded-lg p-3 border border-border/20">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsList;